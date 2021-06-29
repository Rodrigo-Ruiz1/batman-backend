-- Tables neccessary - Users, Facts, Source?, Comments

CREATE TABLE users (
    id serial PRIMARY KEY,
    name text NOT NULL,
    email varchar(200),
    password varchar(2000)
);

CREATE TABLE media (
    id serial PRIMARY KEY,
    media_name text NOT NULL,
    url text NOT NULL,
    slug text
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    score integer NOT NULL,
    content text NOT NULL,
    name_id integer REFERENCES media(id)
);

CREATE TABLE comment (
    id serial PRIMARY KEY,
    user_id integer REFERENCES users(id),
    comment_id integer REFERENCES media(id),
    body text NOT NULL
);



