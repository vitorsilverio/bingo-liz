CREATE TABLE cartela (
  id UUID NOT NULL,
   sorteio_id UUID NOT NULL,
   usuario_id UUID NOT NULL,
   data_criacao TIMESTAMP WITHOUT TIME ZONE NOT NULL,
   CONSTRAINT pk_cartela PRIMARY KEY (id)
);

CREATE TABLE numero_cartela (
  id UUID NOT NULL,
   cartela_id UUID NOT NULL,
   numero INTEGER NOT NULL,
   marcado BOOLEAN NOT NULL,
   ordem INTEGER NOT NULL,
   CONSTRAINT pk_numero_cartela PRIMARY KEY (id)
);

CREATE TABLE numero_sorteado (
  id UUID NOT NULL,
   sorteio_id UUID NOT NULL,
   numero INTEGER NOT NULL,
   momento TIMESTAMP WITHOUT TIME ZONE NOT NULL,
   CONSTRAINT pk_numero_sorteado PRIMARY KEY (id)
);

CREATE TABLE sorteio (
  id UUID NOT NULL,
   data_criacao TIMESTAMP WITHOUT TIME ZONE NOT NULL,
   ativo BOOLEAN NOT NULL,
   CONSTRAINT pk_sorteio PRIMARY KEY (id)
);

CREATE TABLE usuario (
  id UUID NOT NULL,
  ativo BOOLEAN NOT NULL,
  nome_usuario VARCHAR(50) NOT NULL,
  senha VARCHAR(255) NOT NULL,
  CONSTRAINT pk_usuario PRIMARY KEY (id)
);

ALTER TABLE cartela ADD CONSTRAINT FK_CARTELA_ON_SORTEIO FOREIGN KEY (sorteio_id) REFERENCES sorteio (id);

ALTER TABLE cartela ADD CONSTRAINT FK_CARTELA_ON_USUARIO FOREIGN KEY (usuario_id) REFERENCES usuario (id);

ALTER TABLE numero_cartela ADD CONSTRAINT FK_NUMERO_CARTELA_ON_CARTELA FOREIGN KEY (cartela_id) REFERENCES cartela (id);

ALTER TABLE numero_sorteado ADD CONSTRAINT FK_NUMERO_SORTEADO_ON_SORTEIO FOREIGN KEY (sorteio_id) REFERENCES sorteio (id);