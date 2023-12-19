FROM quay.io/maherzubair/Gnime-Md:beta
RUN git clone https://github.com/Astropeda/Gnime-Md /root/Astropeda/Gnime-Md
WORKDIR /root/Astropeda/Gnime-Md/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 