# 📦 Как скачать проект архивом

## Вариант 1: Создать ZIP вручную

### Windows (PowerShell)
```powershell
# В папке проекта
Compress-Archive -Path .\* -DestinationPath ..\mediahouse.zip -Force
```

### Windows (cmd)
```cmd
# Нужен 7-Zip или WinRAR
"C:\Program Files\7-Zip\7z.exe" a ..\mediahouse.zip *
```

### macOS / Linux
```bash
# В папке проекта
cd ..
zip -r mediahouse.zip медиахаус/ -x "*/node_modules/*" "*/dist/*" "*/.git/*"
```

### Или через tar (универсально)
```bash
cd ..
tar -czf mediahouse.tar.gz --exclude='node_modules' --exclude='dist' --exclude='.git' медиахаус/
```

---

## Вариант 2: Загрузить на GitHub

```bash
# 1. Создайте репозиторий на github.com (например, mediahouse)

# 2. Инициализируйте git в проекте
git init
git add .
git commit -m "Initial commit: МедиаХаус"

# 3. Подключите удалённый репозиторий
git remote add origin https://github.com/ВАШ_ЛОГИН/mediahouse.git
git branch -M main
git push -u origin main

# 4. Скачайте архив через GitHub:
#    GitHub → Code → Download ZIP
```

---

## Вариант 3: Разместить онлайн (бесплатно)

### Vercel (рекомендуется)
```bash
npm install -g vercel
vercel
# Получите публичную ссылку
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Загрузите папку dist/ в ветку gh-pages
```

---

## 📋 Что входит в архив

```
медиахаус/
├── src/
│   ├── App.tsx              # Главный компонент
│   ├── main.tsx             # Точка входа
│   ├── index.css            # Стили
│   └── data/
│       └── properties.ts    # Данные квартир
├── index.html               # HTML шаблон
├── package.json             # Зависимости
├── tsconfig.json            # TypeScript конфиг
├── vite.config.js           # Vite конфиг
├── README.md                # Документация
└── INSTALL.md               # Этот файл
```

**Размер архива**: ~50 KB (без node_modules)
**После npm install**: ~150 MB

---

## 🚀 После скачивания архива

```bash
# 1. Распакуйте архив
unzip mediahouse.zip        # Linux/Mac
# или правой кнопкой → Извлечь  # Windows

# 2. Перейдите в папку
cd медиахаус

# 3. Установите зависимости
npm install

# 4. Запустите
npm run dev
```

Откройте http://localhost:5173 🎉
