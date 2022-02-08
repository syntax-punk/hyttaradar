-- DDL generated by Postico 2.0beta
-- Not all database features are supported. Do not use for backup.

-- Table Definition ----------------------------------------------

CREATE TABLE calendarusers (
    id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname character varying(50) NOT NULL,
    lastname character varying(50),
    username character varying(50) NOT NULL UNIQUE,
    mobile character varying(15),
    email character varying(100) NOT NULL UNIQUE,
    password character varying(32) NOT NULL,
    registeredat date NOT NULL,
    lastlogin date,
    intro text,
    profile text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX users_pkey ON calendarusers(id int8_ops);
CREATE UNIQUE INDEX users_username_key ON calendarusers(username text_ops);
CREATE UNIQUE INDEX users_email_key ON calendarusers(email text_ops);

INSERT INTO calendarusers(firstname, lastname, username, mobile, email, password, registeredat, lastlogin, intro, profile) VALUES
('Vugar', 'Abdulzada', 'theVoogie', '21700845', 'vugar.abdulzadeh@gmail.com', 'babushka-gunns12', '2019-11-11', '2022-11-12', 'Halla verden', 'Own it'),
('Justin', 'Bieber', 'jusBeeb', '3326597', 'jb.foreva@yahoo.com', 'letmein2019', '2021-04-29', '2021-07-19', 'Whos here? Just me?', 'Im a nice lad'),
('Gina', 'Braganza', 'gigi12', '8541372', 'gigibraga12@hotmail.com', 'get.me.coffee.asap0001', '2021-07-19', '2022-01-26', 'Hey there Im young and slick', 'I like to coock pancackes');