FROM microsoft/dotnet:2.2-sdk

WORKDIR /application

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt install -y nodejs


COPY package.json ./
RUN npm install

COPY ./ ./

RUN ./node_modules/.bin/gulp
RUN ./node_modules/.bin/webpack -p

RUN rm -r ./obj; exit 0
RUN rm -r ./bin; exit 0

RUN dotnet restore
RUN dotnet publish -c Release -o out

CMD ["dotnet", "out/BryankroesbeekNl.dll"]