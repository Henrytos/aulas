CREATE TABLE funcionarios (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    area VARCHAR(50),
    salario DECIMAL(10,2)
);


-- Inserir dados de exemplo na tabela funcionarios
INSERT INTO funcionarios (id, nome, area, salario) VALUES
(1, 'João Silva', 'TI', 5000.00),
(2, 'Maria Souza', 'TI', 6000.00),
(3, 'Pedro Santos', 'RH', 3500.00),
(4, 'Ana Costa', 'RH', 4000.00),
(5, 'Carlos Oliveira', 'Marketing', 2800.00),
(6, 'Fernanda Lima', 'Marketing', 3200.00),
(7, 'Ricardo Gomes', 'TI', 7000.00),
(8, 'Sandra Pires', 'RH', 3000.00),
(9, 'Gustavo Almeida', 'Vendas', 4500.00),
(10, 'Julia Dias', 'Vendas', 5500.00);


# função matematica (espera que eu use group by )
# - MAX(column) - registro maximo
# - MIN(column) - registro minimo
# - SUM(column) - somar valores
# - AVG(column) - media aritimeticad de valores
# - COUNT(column) - contarem de valores
# nunca use where com função matematica(a menos que seja sub query)
# nunca use where depois de group by

# HAVING condição de agrupamento(group by) após o group by não pode usar alias , somente comparações com funções matematicas acima

# MEDIA SALARIAL POR AREA
SELECT area, TRUNCATE(AVG(salario), 1) as 'media salarial' FROM funcionarios
	GROUP BY area
  HAVING AVG(salario) > 3000;
  
  
# QUANTIDADES DE AREA QUE GANHA MAIS QUE R$3000
SELECT funcionarios.area,COUNT(funcionarios.id) 'quantidade' , AVG(funcionarios.salario) 'salario_medio' FROM funcionarios
	GROUP BY area
  HAVING AVG(salario) > 3000;
  
 
 
