# שלב 1: בנייה
FROM node:18-alpine AS builder

# יצירת working directory
WORKDIR /app

# התקנת תלויות
COPY package*.json ./
RUN npm install --only=production

# העתקת קבצי קוד
COPY src ./src

# שלב 2: הרצה
FROM node:18-alpine

WORKDIR /app

# רק קבצים נחוצים
COPY --from=builder /app /app

# פתיחת פורט
EXPOSE 3000

# פקודת הרצה
CMD ["node", "src/server.js"]