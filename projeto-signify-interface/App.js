import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button } from 'react-native';
import { Camera } from 'expo-camera';
import io from 'socket.io-client';
import axios from 'axios';

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [translation, setTranslation] = useState("");
  const cameraRef = useRef(null);

  // Conexão com o backend via Socket.IO
  const socket = useRef(io("http://192.168.0.10:8000")).current; // coloque o IP da sua máquina aqui

  useEffect(() => {
    socket.on("prediction", (data) => {
      setTranslation(data.result);
    });

    return () => socket.disconnect();
  }, []);

  async function captureAndSend() {
    if (!cameraRef.current) return;
    const photo = await cameraRef.current.takePictureAsync({ base64: true });
    socket.emit("send_frame", { frame: photo.base64 });
  }

  if (!permission) return <View />;
  if (!permission.granted)
    return <Button title="Permitir acesso à câmera" onPress={requestPermission} />;

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={cameraRef} style={{ flex: 1 }} />
      <Text style={{ position: "absolute", bottom: 60, left: 10, fontSize: 20, color: "#fff" }}>
        Tradução: {translation || "Nenhuma"}
      </Text>
      <Button title="Capturar gesto" onPress={captureAndSend} />
    </View>
  );
}