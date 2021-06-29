INSERT INTO users
    (name, email, password)
VALUES
    ('Matt Ban', 'darkknight39@fake.com', 'vengeance');

INSERT INTO media
    (media_name, url, slug)
VALUES
    ('Batman: The Dark Knight Returns', 'https://image.tmdb.org/t/p/original/vjWqMFcacGH09qfP7UuKXw4iCEo.jpg', 'the_dark_knight_returns'),
    ('Batman: Mask of the Phantasm', 'https://image.tmdb.org/t/p/original/l4jaQjkgznu2Rz05X18f24UjPNW.jpg', 'mask_of_the_phantasm');

INSERT INTO reviews
    (score, content, name_id)
VALUES
    ('10', 'The Dark Knight Returns is a movie adaptation of the graphic novel by the same name.', 1),
    ('10', 'A classic Batman movie from the animated series.', 2);

INSERT INTO comment
    (user_id, comment_id, body)
VALUES
    (1, 1, 'wow i love batman now');