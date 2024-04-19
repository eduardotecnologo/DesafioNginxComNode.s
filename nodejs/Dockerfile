# Use a imagem oficial do Node.js como base
FROM node:14-alpine

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta 3000 para acessar a aplicação
EXPOSE 3000

# Comando padrão para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "start"]
