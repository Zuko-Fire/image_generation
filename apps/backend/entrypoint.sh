#!/bin/sh

# Ждём, пока PostgreSQL станет доступен
echo "⏳ Waiting for PostgreSQL to start..."
while ! nc -z postgres 5432; do
  sleep 1
done
echo "✅ PostgreSQL is up!"

# Запускаем миграции
echo "🚀 Running Sequelize migrations..."
npx sequelize-cli db:migrate --config src/db/config/config.js

# Запускаем приложение
echo "🔧 Starting NestJS app..."
npm run start:dev