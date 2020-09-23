create schema Ecomerce;

create table usuario(
	usuario_id INT NOT NULL AUTO_INCREMENT unique,
    usuario_name VARCHAR(45) NOT NULL,
    usuario_mail VARCHAR(50) NOT NULL,
    usuario_adress VARCHAR(100) NOT NULL,
    
    usuario_numtarjeta varchar(16) not null,
    usuario_cvv varchar(3) not null,
    usuario_venc varchar(4) not null,
    usuario_nomtarjeta varchar(100) not null, 
    
    primary key(usuario_id)
);

create table stock(
	product_id int  NOT NULL AUTO_INCREMENT unique,
    product_name varchar(100) NOT null,
    product_date varchar(4) not null,
    product_description varchar(2000),
    product_price double not null,
    
	primary key(product_id)
);


create table pedido(
	pedido_id int not null auto_increment unique,
    pedido_fecha datetime not null,
    product_id int not null,
    product_cantidad int,
	usuario_id int not null,
    
	primary key(pedido_id),
    foreign key(product_id) references stock(product_id),
    foreign key(usuario_id) references usuario(usuario_id)
);

