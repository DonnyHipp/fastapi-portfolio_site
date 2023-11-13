from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

router = APIRouter(prefix='')
templates = Jinja2Templates(directory="mainapp/templates")


@router.get('/', response_class=HTMLResponse)
def main_page(request:Request):
    return templates.TemplateResponse("index.html", {"request": request})