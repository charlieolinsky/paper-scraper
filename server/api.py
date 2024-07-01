from fastapi import FastAPI
from server.scraper.scraper.spiders.news_spider import run_spider

app = FastAPI()

@app.get("/api/get/run-spider")
async def spider_endpoint():
    run_spider()
    return {"status": "Spider Running"}