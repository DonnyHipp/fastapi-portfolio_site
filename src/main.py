from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from mainapp.router import router as mainrouter


app = FastAPI()

app.include_router(mainrouter)


app.mount("/static", StaticFiles(directory="static"), name="static")