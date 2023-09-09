FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    jq \
    git \
    curl \
    npm \
    wget \
    nodejs \
    ffmpeg \
    bpm-tools \
    python3-pip \
    python-is-python3 
RUN npm install -g n
RUN hash -r
RUN n 16
RUN npm install -g yarn
RUN hash -r
RUN git clone https://github.com/QUEENNICKYMDBOT/QUEEN-NICKY-MD-BOT1
WORKDIR/QUEEN-NICKY-MD-BOT1

CMD [ "yarn", "run", "start" ]
