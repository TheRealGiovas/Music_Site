create schema Ecomerce;

create table usuario(
	
    usuario_name VARCHAR(45) NOT NULL,
    usuario_mail VARCHAR(50) NOT NULL unique,
    usuario_password varchar(50) not null,
    usuario_adress VARCHAR(100) NOT NULL,
    
    
    
    primary key(usuario_mail)
);

create table stock(
	product_id int  NOT NULL unique,
    product_name varchar(100) NOT null,
    product_date varchar(4) not null,
    product_description varchar(2000),
    product_type varchar(100),
    product_price double not null,
    product_image_url varchar(500) null,
	primary key(product_id)
);


create table pedido(
	pedido_id int not null auto_increment unique,
    pedido_fecha datetime not null,
    product_id int not null,
    product_cantidad int,
    
	usuario_mail varchar(50) not null,
    
	primary key(pedido_id),
    foreign key(product_id) references stock(product_id),
    foreign key(usuario_mail) references usuario(usuario_mail)
);

drop table pedido;
drop table usuario;
drop table stock;




ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

insert into stock(product_id, product_name, product_date, product_description, product_type, product_price, product_image_url) values("6","Epiphone SG", "2020", "guitarra bonita y chida", "Guitarra Electrica", 20000, "https://cdn.shopify.com/s/files/1/0183/0329/products/SGG-400PRO.png?v=1593820337" );