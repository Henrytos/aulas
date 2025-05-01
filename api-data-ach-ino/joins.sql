CREATE DATABASE juan;
USE juan;
CREATE TABLE clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cliente_id INT,
    produto VARCHAR(100),
    valor DECIMAL(10, 2),
    data_pedido DATE,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

INSERT INTO clientes (nome, email) VALUES
('Ana Silva', 'ana@email.com'),
('Bruno Costa', 'bruno@email.com'),
('Carlos Souza', 'carlos@email.com'),
('Daniela Lima', 'daniela@email.com'),
('Eduardo Mendes', 'eduardo@email.com'),
('Fernanda Rocha', 'fernanda@email.com'),
('Gustavo Tavares', 'gustavo@email.com'),
('Helena Duarte', 'helena@email.com'),
('Igor Ramos', 'igor@email.com'),
('Juliana Alves', 'juliana@email.com');

SELECT * FROM clientes;
SELECT * FROM pedidos;

-- JOIN (somente registros relacionados)
SELECT * FROM clientes JOIN pedidos ON pedidos.cliente_id = clientes.id;

-- LEFT JOIN (tabela da ESQUERDA + relações existentes)
SELECT * FROM clientes LEFT JOIN pedidos ON pedidos.cliente_id = clientes.id;

-- RIGHT JOIN (tabela da direita + relações existentes)
SELECT * FROM clientes RIGHT JOIN pedidos ON pedidos.cliente_id = clientes.id;


