FROM python:3.11.2-alpine3.17
WORKDIR /dobot
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
CMD ["python", "app.py"]
EXPOSE 3001
