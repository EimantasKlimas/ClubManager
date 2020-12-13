# --- !Ups

CREATE TABLE IF NOT EXISTS clubs(
    id VARCHAR(16) PRIMARY KEY,
    name VARCHAR(50)
    );

CREATE TABLE IF NOT EXISTS club_members(
    id VARCHAR(16) PRIMARY KEY,
    club_id VARCHAR(16),
    name VARCHAR(50),
    surname VARCHAR(50),
    FOREIGN KEY(club_id) references clubs(id)
    );

# --- !Downs

DROP TABLE IF EXISTS clubs;
DROP TABLE IF EXISTS club_members;