# Use a imagem oficial do MySQL como base
FROM mysql:5.7

# Defina a variável de ambiente MYSQL_ROOT_PASSWORD para definir a senha do usuário root do MySQL
ENV MYSQL_ROOT_PASSWORD=root

# Copie o arquivo SQL para inicializar o banco de dados para o diretório /docker-entrypoint-initdb.d/ do contêiner MySQL
# Este script SQL será executado automaticamente quando o contêiner MySQL for iniciado pela primeira vez
COPY ./init.sql /docker-entrypoint-initdb.d/
