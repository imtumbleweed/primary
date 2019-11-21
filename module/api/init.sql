  
CREATE TABLE IF NOT EXISTS user ( 
  email_address VARCHAR(50) NOT NULL, 
  password_md5 VARCHAR(100) NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
	avatar VARCHAR(300),
	username VARCHAR(50) NOT NULL PRIMARY KEY
);

-- ALTER TABLE user CHANGE password password_md5 VARCHAR(10);

-- DROP TABLE IF EXISTS user;


-- -- create table pages 
-- CREATE TABLE IF NOT EXISTS pages (
--   page_id SERIAL,
--   created_by TEXT REFERENCES users(email) ON DELETE CASCADE, 
--   creation_date TIMESTAMP DEFAULT NOW(),
--   owner_id SERIAL REFERENCES users(user_id) ON DELETE CASCADE,  
--   title JSON,    
--   is_published BOOLEAN DEFAULT FALSE,
--   is_homepage_grid BOOLEAN,
--   is_nav_menu BOOLEAN,
--   last_edited_date JSON, 
--   PRIMARY KEY (page_Id)
-- );

-- -- craete table images
-- CREATE TABLE IF NOT EXISTS images (
--  image_id SERIAL,
--  image_name TEXT,
--  created TIMESTAMP DEFAULT NOW(),
--  location TEXT,
--  page_id INTEGER REFERENCES pages(page_id) ON DELETE CASCADE,
--  page_image BOOLEAN,
--  banner_image BOOLEAN,
--  uploaded_images BOOLEAN,
--  PRIMARY KEY (image_id)  
-- );


-- CREATE TABLE IF NOT EXISTS page_navigations (
--    item_id INTEGER,
--    page_id INTEGER REFERENCES pages (page_id) ON DELETE CASCADE,
--    parent_id INTEGER,
--    title TEXT UNIQUE,
--    order_num INTEGER,
--    PRIMARY KEY (item_id)
-- );


-- -- CREATE TABLE IF NOT EXISTS navigations (
-- --   page_id INTEGER REFERENCES pages(page_id) ON DELETE SET NULL,
-- --   created_by TEXT,
-- --   created TIMESTAMP DEFAULT NOW(),
-- --   name TEXT,
-- --   title TEXT,
-- --   link TEXT,
-- --   order_number INTEGER,
-- --   content TEXT,
-- --   navigation_id SERIAL,
-- --   parent_navigation_id INTEGER REFERENCES navigations(navigation_id),
-- --   PRIMARY KEY (navigation_id)
-- -- );

-- -- CREATE TABLE IF NOT EXISTS sub_navigations (
-- --   sub_nav_id SERIAL,
-- --   page_id INTEGER REFERENCES pages(page_id) ON DELETE SET NULL,
-- --   created TIMESTAMP DEFAULT NOW(),
-- --   name TEXT,
-- --   link TEXT,
-- --   grid_order_number INTEGER,
-- --   content TEXT,
-- --   parent_navigation_id INTEGER REFERENCES navigations(navigation_id),
-- --   PRIMARY KEY (sub_nav_id)
-- -- );

-- CREATE TABLE IF NOT EXISTS call_to_actions (
--   action_id SERIAL,
--   decription TEXT,
--   PRIMARY KEY (action_id)
-- );




-- -- creates tables user_sessions 
-- CREATE TABLE IF NOT EXISTS user_sessions (
--   sid VARCHAR NOT NULL COLLATE "default",
-- 	sess JSON NOT NULL,
-- 	expire TIMESTAMP(6) NOT NULL,
--   PRIMARY KEY (sid) NOT DEFERRABLE INITIALLY IMMEDIATE
-- )
-- WITH (OIDS=FALSE);

-- DROP TABLE IF EXISTS sub_navigations;

-- DROP TABLE IF EXISTS navigations;

-- CREATE SEQUENCE IF NOT EXISTS page_navigations_item_id_seq;

-- ALTER table page_navigations ALTER COLUMN item_id SET NOT NULL;

-- ALTER TABLE page_navigations ALTER COLUMN item_id SET DEFAULT  nextval('page_navigations_item_id_seq');

-- ALTER TABLE users DROP COLUMN IF EXISTS active;

-- ALTER TABLE users DROP COLUMN IF EXISTS activated;

-- ALTER TABLE users DROP COLUMN IF EXISTS old_pasword;

-- ALTER TABLE pages DROP COLUMN IF EXISTS owner_id;

-- -- ALTER TABLE navigations DROP COLUMN IF EXISTS order_number;

-- -- ALTER TABLE navigations DROP COLUMN IF EXISTS parent_navigation_id;

-- -- ALTER TABLE navigations DROP COLUMN IF EXISTS grid_order_numer;

-- -- ALTER TABLE navigations DROP COLUMN IF EXISTS name;

-- -- ALTER TABLE navigations DROP COLUMN IF EXISTS content;

-- -- ALTER TABLE sub_navigations DROP COLUMN IF EXISTS name;

-- -- ALTER TABLE sub_navigations DROP COLUMN IF EXISTS content;

-- ALTER TABLE users ALTER COLUMN password DROP NOT NULL;

-- ALTER TABLE call_to_actions DROP COLUMN IF EXISTS decription;

-- ALTER TABLE users ALTER COLUMN creation_date SET DEFAULT now();

-- ALTER TABLE pages ALTER COLUMN title SET DATA TYPE TEXT;

-- ALTER TABLE pages ALTER COLUMN is_nav_menu SET DEFAULT FALSE;

-- ALTER TABLE pages ALTER COLUMN is_homepage_grid SET DEFAULT FALSE;

-- ALTER TABLE images ALTER COLUMN page_image SET DEFAULT FALSE;

-- ALTER TABLE images ALTER COLUMN banner_image SET DEFAULT FALSE;

-- ALTER TABLE images ALTER COLUMN uploaded_images SET DEFAULT FALSE;



-- ALTER TABLE users ADD COLUMN IF NOT EXISTS activation_token TEXT,
--   ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT FALSE,
--   ADD COLUMN IF NOT EXISTS old_password JSON[];  --- {"password":"","token_date":"","change_token":""}

-- ALTER TABLE users ALTER COLUMN is_admin SET DEFAULT TRUE;

-- ALTER TABLE pages ADD COLUMN IF NOT EXISTS ckeditor_html TEXT,
--    ADD COLUMN IF NOT EXISTS order_number INTEGER,
--    ADD COLUMN IF NOT EXISTS page_description TEXT,
--    ADD COLUMN IF NOT EXISTS banner_location TEXT,
--    ADD COLUMN IF NOT EXISTS last_edited_by TEXT,
--    ADD COLUMN IF NOT EXISTS is_draft BOOLEAN,
--    ADD COLUMN IF NOT EXISTS link TEXT UNIQUE;

-- ALTER TABLE page_navigations ADD COLUMN IF NOT EXISTS updated_date TIMESTAMP,
--     ADD COLUMN IF NOT EXISTS creation_date TIMESTAMP DEFAULT NOW(),
--     ADD COLUMN IF NOT EXISTS created_by INTEGER REFERENCES users(user_id) ON DELETE SET NULL;
--  --  ADD COLUMN IF NOT EXISTS owner_id INT REFERENCES users(user_id) ON DELETE SET NULL;


-- -- ALTER TABLE sub_navigations ADD COLUMN IF NOT EXISTS title TEXT;

-- -- ALTER TABLE sub_navigations DROP CONSTRAINT IF EXISTS sub_nav_order_const;

 
--  ALTER TABLE call_to_actions ADD COLUMN IF NOT EXISTS created TIMESTAMP DEFAULT NOW();

-- ALTER TABLE call_to_actions ADD COLUMN IF NOT EXISTS description TEXT;

-- --ALTER TABLE pages DROP COLUMN IF EXISTS owner_id;
-- ALTER TABLE pages ALTER COLUMN title SET NOT NULL;

-- -- ALTER TABLE navigations ADD COLUMN IF NOT EXISTS nav_order_number INTEGER;
-- --  ADD COLUMN IF NOT EXISTS grid_order_number INTEGER;

-- ALTER TABLE images DROP COLUMN IF EXISTS page_id;



-- -- make nav order unique
-- -- DO $$
-- -- BEGIN
-- --     IF NOT EXISTS ( SELECT  conname
-- --                 FROM    pg_constraint 
-- --                 WHERE   conname = 'nav_order_const')
-- --     THEN
-- --         ALTER TABLE navigations ADD CONSTRAINT nav_order_const UNIQUE (nav_order_number);
-- --     END IF;
-- -- END$$;

-- -- make child nav order unique
-- -- DO $$
-- -- BEGIN
-- --     IF NOT EXISTS ( SELECT  conname
-- --                 FROM    pg_constraint 
-- --                 WHERE   conname = 'sub_nav_order_const')
-- --     THEN
-- --         ALTER TABLE sub_navigations ADD CONSTRAINT sub_nav_order_const UNIQUE (grid_order_number);
-- --         -- DELETE FROM pg_constraint WHERE conname= 'sub_nav_order_const';
-- --     END IF;
-- -- END$$;


-- -- DO $$
-- -- BEGIN
-- --     IF NOT EXISTS ( SELECT  conname
-- --                 FROM    pg_constraint 
-- --                 WHERE   conname = 'nav_name_const')
-- --     THEN
-- --         ALTER TABLE navigations ADD CONSTRAINT nav_name_const UNIQUE (name);
-- --     END IF;
-- -- END$$;

--  -- adds constraint to email column does
--  --  not recieve empty string

-- DO $$
-- BEGIN
--     IF NOT EXISTS ( SELECT  conname
--                 FROM    pg_constraint 
--                 WHERE   conname = 'not_empty_string')
--     THEN
--         ALTER TABLE users ADD CONSTRAINT not_empty_string CHECK (email <> '');
--     END IF;
-- END$$;

-- --  add constraint to email column not to
-- --  receive undefined

-- DO $$
-- BEGIN
--     IF NOT EXISTS ( SELECT  conname
--                 FROM    pg_constraint 
--                 WHERE   conname = 'not_undefined')
--     THEN
--         ALTER TABLE users ADD CONSTRAINT not_undefined CHECK (email <>'undefined');
--     END IF;
-- END$$;

-- -- converts text array to json array

-- DO $$
-- BEGIN
--   IF ( select udt_name from information_schema.columns 
--       where table_name = 'users' and column_name='old_email') = '_text'
--   THEN
--      ALTER TABLE users DROP COLUMN old_email;
--      ALTER TABLE users ADD COLUMN old_email JSON[];
--   END IF;
-- END $$;





-- -- drops json datatype from last_edited_date column
-- -- and cast it to timestamp without zone

-- DO $$
-- BEGIN 
--     IF EXISTS (select 1 from information_schema.columns 
--         where table_name = 'pages' and 
--         column_name = 'last_edited_date' and data_type = 'json')
--     THEN 
--        ALTER TABLE pages DROP COLUMN last_edited_date;
--        ALTER TABLE pages ADD COLUMN last_edited_date TIMESTAMP;
--     END IF;
-- END
-- $$;

-- -- creates a function to the time a page
-- -- was edited 


-- CREATE OR REPLACE FUNCTION trigger_set_timestamp()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.last_edited_date = NOW();
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;


-- -- function to update time on page_navigations


-- CREATE OR REPLACE FUNCTION trigger_set_nav_timestamp()
-- RETURNS TRIGGER AS $$
-- BEGIN
--     NEW.updated_date = NOW();
--     RETURN NEW;
-- END;
-- $$ LANGUAGE plpgsql;


-- -- sets a trigger for update action time

-- DO $$
-- BEGIN
--   IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_timestamp') THEN
--         CREATE TRIGGER set_timestamp
--         BEFORE UPDATE ON pages 
--         FOR EACH ROW
--         EXECUTE PROCEDURE trigger_set_timestamp();
--   END IF;
-- END
-- $$;


-- -- sets trigger for update action time on page_navigations
-- DO $$
-- BEGIN
--   IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_nav_timestamp') THEN
--         CREATE TRIGGER set_nav_timestamp
--         BEFORE UPDATE ON page_navigations
--         FOR EACH ROW
--         EXECUTE PROCEDURE trigger_set_nav_timestamp();
--   END IF;
-- END
-- $$;

-- -- alter foreign constraint on pages

-- DO $$
-- BEGIN
--   IF ( select confdeltype from pg_constraint 
--       where conname = 'pages_created_by_fkey') = 'c'
--   THEN 
--      ALTER TABLE pages DROP CONSTRAINT pages_created_by_fkey;
--      ALTER TABLE pages ADD CONSTRAINT pages_created_by_fkey FOREIGN KEY 
--      (created_by) REFERENCES users(email) ON DELETE SET NULL;
--   END IF;
-- END $$;

-- ------ alter pages foreign constraint on created_by

-- DO $$
-- BEGIN
--   IF ( select udt_name from information_schema.columns 
--   where table_name = 'pages' and column_name='created_by') = 'text'
--   THEN
--      ALTER TABLE pages DROP COLUMN created_by;
--      ALTER TABLE pages ADD COLUMN created_by INTEGER REFERENCES users(user_id) ON DELETE SET NULL;
--   END IF;
-- END $$;