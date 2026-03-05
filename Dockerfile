# -------- FRONTEND BUILD --------
FROM node:20 AS frontend-build

WORKDIR /app/frontend

COPY ./frontend/package*.json ./
RUN npm install

COPY ./frontend .
RUN npm run build


# -------- BACKEND --------
FROM node:20

WORKDIR /app/backend

COPY ./backend/package*.json ./
RUN npm install

COPY ./backend .

# copy React build to backend public folder
COPY --from=frontend-build /app/frontend/dist ./public

EXPOSE 8080

CMD ["node", "server.js"]