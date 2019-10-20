CREATE TABLE wines (
  `id` INTEGER  PRIMARY KEY,
  `country` VARCHAR(64),
  `description` VARCHAR(1024),
  `designation` VARCHAR(128),
  `points` VARCHAR (8),
  `price` VARCHAR (8),
  `province` VARCHAR (64),
  `region_1` VARCHAR (64),
  `region_2` VARCHAR (64),
  `taster_name` VARCHAR (64),
  `taster_twitter_handle` VARCHAR (64),
  `title` VARCHAR (254),
  `variety` VARCHAR (64),
  `winery` VARCHAR (128)
) as select * from CSVREAD('classpath:winemag-data-130k-v2.csv');
