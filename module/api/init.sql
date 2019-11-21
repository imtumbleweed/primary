  
CREATE TABLE IF NOT EXISTS user ( 
  email_address VARCHAR(50) NOT NULL, 
  password_md5 VARCHAR(100) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
	avatar VARCHAR(300),
	username VARCHAR(50) NOT NULL PRIMARY KEY
);