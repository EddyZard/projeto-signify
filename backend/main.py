# backend/main.py
import socketio
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import numpy as np
import tensorflow as tf
import cv2

# --- Configuração do servidor ---
sio = socketio.AsyncServer(cors_allowed_origins="*")
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)
sio_app = socketio.ASGIApp(sio, other_asgi_app=app)

# --- Rotas básicas ---
@app.get("/")
async def root():
    return {"message": "Servidor de tradução de Libras ativo!"}

# --- Eventos de SocketIO ---
@sio.event
async def connect(sid, environ):
    print(f"Cliente conectado: {sid}")

@sio.event
async def send_frame(sid, data):
    # Aqui você processaria o frame usando TensorFlow
    prediction = "sinal_detectado"  # Placeholder
    await sio.emit("prediction", {"result": prediction}, to=sid)