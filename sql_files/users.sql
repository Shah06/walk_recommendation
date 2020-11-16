# create users table
CREATE TABLE IF NOT EXISTS users (
id int NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
email varchar(100) NOT NULL,
password varchar(100) NOT NULL,
city varchar(100) NOT NULL,
UNIQUE (email),
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# create sessions table
CREATE TABLE IF NOT EXISTS sessions (
sessionId varchar(36) NOT NULL,
time_created timestamp NOT NULL DEFAULT current_timestamp,
userId int NOT NULL,
PRIMARY KEY (sessionId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

# populate users table with test data
insert into users (id, name, email, city, password) values (1, 'Gayla Sleany', 'gsleany0@ibm.com', 'Pinheiro Machado', '7CNWiWC');
insert into users (id, name, email, city, password) values (2, 'Laurie Minchinton', 'lminchinton1@qq.com', 'Itapaci', 'vk0WL4mWEHF');
insert into users (id, name, email, city, password) values (3, 'Dale Ashborne', 'dashborne2@virginia.edu', 'Ndago', 'RR8hggU');
insert into users (id, name, email, city, password) values (4, 'Evangelina Corder', 'ecorder3@go.com', 'Qukuhu', 'uAT0Kfe8JdJv');
insert into users (id, name, email, city, password) values (5, 'Corliss Boothe', 'cboothe4@amazon.de', 'Makamba', 'h09sYmAZd5bK');
insert into users (id, name, email, city, password) values (6, 'Gustaf Elby', 'gelby5@angelfire.com', 'Basoko', 'XrHPk2GOZArA');
insert into users (id, name, email, city, password) values (7, 'Basile Longstaffe', 'blongstaffe6@a8.net', 'Osięciny', 'TczyPh');
insert into users (id, name, email, city, password) values (8, 'Blake Pietri', 'bpietri7@dot.gov', 'Vredendal', 'VVE0tz');
insert into users (id, name, email, city, password) values (9, 'Rosette Jzak', 'rjzak8@redcross.org', 'Nanxia', 'OKVxSkl0gL6h');
insert into users (id, name, email, city, password) values (10, 'Leisha Faithfull', 'lfaithfull9@histats.com', 'Sanhe', 'uerstzXY');
insert into users (id, name, email, city, password) values (11, 'Wye Duly', 'wdulya@forbes.com', 'Huangmei', 'QZsGOpCtat');
insert into users (id, name, email, city, password) values (12, 'Enrika Southam', 'esouthamb@cpanel.net', 'Xijiadian', 'PzhRYduSW');
insert into users (id, name, email, city, password) values (13, 'Mariya Crowhurst', 'mcrowhurstc@columbia.edu', 'Lubochnia', 'nmXI6HCTjl8');
insert into users (id, name, email, city, password) values (14, 'Giorgia Ivey', 'giveyd@trellian.com', 'Qingfa', 'Y6DPOSz');
insert into users (id, name, email, city, password) values (15, 'Pascal Booty', 'pbootye@arstechnica.com', 'Pakemitan Dua', 'rEmLkFKn5');
insert into users (id, name, email, city, password) values (16, 'Baird Elsop', 'belsopf@chron.com', 'Laventure', 'qnkUko');
insert into users (id, name, email, city, password) values (17, 'Haskel Brimm', 'hbrimmg@dropbox.com', 'Feira de Santana', 'qqf1ia');
insert into users (id, name, email, city, password) values (18, 'Leena Gray', 'lgrayh@aboutads.info', 'Madīnat Sittah Uktūbar', 'WkTTJo');
insert into users (id, name, email, city, password) values (19, 'Haskell Pury', 'hpuryi@vistaprint.com', 'Santander', 'faVmtJJm');
insert into users (id, name, email, city, password) values (20, 'Farleigh Learmouth', 'flearmouthj@blogspot.com', 'Camp Ithier', 'GeRMPp');
insert into users (id, name, email, city, password) values (21, 'Drucie Extall', 'dextallk@ow.ly', 'Xinhuang', 'B5tN0DoFz2Db');
insert into users (id, name, email, city, password) values (22, 'Johny Sabberton', 'jsabbertonl@usda.gov', 'Yalagüina', 'M6d3x0nhNH');
insert into users (id, name, email, city, password) values (23, 'Tootsie Scourge', 'tscourgem@google.ca', 'Sugihan', '2yqsAZckc8');
insert into users (id, name, email, city, password) values (24, 'Vlad Lawman', 'vlawmann@sogou.com', 'Kalinovskoye', 'AYsmapDSgW');
insert into users (id, name, email, city, password) values (25, 'Justis Keatch', 'jkeatcho@gizmodo.com', 'Banga', '2W2QUy');
insert into users (id, name, email, city, password) values (26, 'Amandy MacGregor', 'amacgregorp@epa.gov', 'Shentong', 'V0Ib3Q2hxvb');
insert into users (id, name, email, city, password) values (27, 'Daloris McSporrin', 'dmcsporrinq@cyberchimps.com', 'Comalapa', 'fymymiXs6hpj');
insert into users (id, name, email, city, password) values (28, 'Constantine Joe', 'cjoer@ted.com', 'Quatre Bornes', 'bdSOU5');
insert into users (id, name, email, city, password) values (29, 'Inglis Giblett', 'igibletts@marketwatch.com', 'Amvrosiyivka', 'g96dWd');
insert into users (id, name, email, city, password) values (30, 'Dillie Knowler', 'dknowlert@typepad.com', 'Bongandanga', '0hlt4FNhsmy');
insert into users (id, name, email, city, password) values (31, 'Garret Hadwick', 'ghadwicku@newsvine.com', 'Lorica', 'HBzC6ejkx');
insert into users (id, name, email, city, password) values (32, 'Lynne Peschke', 'lpeschkev@netvibes.com', 'Seremban', 'cnCZL5');
insert into users (id, name, email, city, password) values (33, 'Lilli Duffield', 'lduffieldw@si.edu', 'Candating', 'MpwttoPDVi');
insert into users (id, name, email, city, password) values (34, 'Craggie Wolton', 'cwoltonx@domainmarket.com', 'Delod Pangkung', 'YkIkIJVbzczr');
insert into users (id, name, email, city, password) values (35, 'Margit Hannond', 'mhannondy@ifeng.com', 'Severodvinsk', 'qHenYEOJ1QS');
insert into users (id, name, email, city, password) values (36, 'Roley Bess', 'rbessz@eepurl.com', 'Detik Satu', 'eoLqQCB');
insert into users (id, name, email, city, password) values (37, 'Dorine Smallwood', 'dsmallwood10@nydailynews.com', 'Buinsk', 'ILUnWEB');
insert into users (id, name, email, city, password) values (38, 'Zelda Enriquez', 'zenriquez11@google.cn', 'Seogeom-ri', 'jxdUwPKrF');
insert into users (id, name, email, city, password) values (39, 'Vitoria MacCarroll', 'vmaccarroll12@typepad.com', 'San Esteban', 'HCGbDxi');
insert into users (id, name, email, city, password) values (40, 'Danika Wakeham', 'dwakeham13@devhub.com', 'Mafraq', 'DAjwL53x');
insert into users (id, name, email, city, password) values (41, 'Abbe Langrish', 'alangrish14@amazon.de', 'Kyoto', 'hQwmt0H3');
insert into users (id, name, email, city, password) values (42, 'Issy McGuinness', 'imcguinness15@dailymotion.com', 'Xagqu', 'hB3prI73ZmB');
insert into users (id, name, email, city, password) values (43, 'Gare Hammerman', 'ghammerman16@mapy.cz', 'Voskop', '6ZzMmQjnI');
insert into users (id, name, email, city, password) values (44, 'Raimundo Oguz', 'roguz17@reddit.com', 'Suya', 'iH6skWDLi');
insert into users (id, name, email, city, password) values (45, 'Iolande Coneybeare', 'iconeybeare18@google.ca', 'Ljungby', 'Uwfa2k22fH8');
insert into users (id, name, email, city, password) values (46, 'Arthur Renachowski', 'arenachowski19@nsw.gov.au', 'Épinal', 'mesAq1P');
insert into users (id, name, email, city, password) values (47, 'Genna Marjoribanks', 'gmarjoribanks1a@nydailynews.com', 'Higashimurayama-shi', 'ayGqtWZGnL');
insert into users (id, name, email, city, password) values (48, 'Kassandra Finnigan', 'kfinnigan1b@ftc.gov', 'Drogomyśl', 'sjhlqvDYr91');
insert into users (id, name, email, city, password) values (49, 'Arin Pearse', 'apearse1c@zimbio.com', 'Norrköping', '7VyoDEyZ');
insert into users (id, name, email, city, password) values (50, 'Jany Tape', 'jtape1d@businessweek.com', 'Norfolk County', 'GaAdcc');
insert into users (id, name, email, city, password) values (51, 'Rebekah Leavold', 'rleavold1e@tripadvisor.com', 'Mirsk', 'izeOazR');
insert into users (id, name, email, city, password) values (52, 'Kaye Pennells', 'kpennells1f@mlb.com', 'Aime', '3YDmnunOzs');
insert into users (id, name, email, city, password) values (53, 'Crichton Dearle-Palser', 'cdearlepalser1g@slideshare.net', 'Orhei', 'RUDiaAd5');
insert into users (id, name, email, city, password) values (54, 'Aubry Hulles', 'ahulles1h@webs.com', 'Loma Bonita', 'THa2aoL');
insert into users (id, name, email, city, password) values (55, 'Klarrisa Skally', 'kskally1i@msu.edu', 'Guojia', 'i23B3MQU');
insert into users (id, name, email, city, password) values (56, 'Guinevere Bondley', 'gbondley1j@infoseek.co.jp', 'Neftegorsk', '7ArVGoDn');
insert into users (id, name, email, city, password) values (57, 'Fernando Pristnor', 'fpristnor1k@facebook.com', 'Herrera', 'tfPtOk');
insert into users (id, name, email, city, password) values (58, 'Sasha Beaby', 'sbeaby1l@hexun.com', 'Debre Mark’os', 'gEjuEa');
insert into users (id, name, email, city, password) values (59, 'Twyla Woolens', 'twoolens1m@ocn.ne.jp', 'Svalyava', 'lMGvjTZCdl0M');
insert into users (id, name, email, city, password) values (60, 'Lucien Balderson', 'lbalderson1n@devhub.com', 'Stari Grad', 'yDBSICMhr8');
insert into users (id, name, email, city, password) values (61, 'Jammie Gooly', 'jgooly1o@mapy.cz', 'Dolní Rychnov', '0QdVFoJ');
insert into users (id, name, email, city, password) values (62, 'Keriann Brelsford', 'kbrelsford1p@deviantart.com', 'Zhangdan', 'srRmvF');
insert into users (id, name, email, city, password) values (63, 'Malissia Wyrall', 'mwyrall1q@goo.ne.jp', 'Thanh Chương', 'Vsp39Ir');
insert into users (id, name, email, city, password) values (64, 'Teresa Kohnen', 'tkohnen1r@exblog.jp', 'Na Muen', '5HECV6wE');
insert into users (id, name, email, city, password) values (65, 'Dannie Higgoe', 'dhiggoe1s@pcworld.com', 'Nanjie', '6zPKXIE');
insert into users (id, name, email, city, password) values (66, 'Erena Lelievre', 'elelievre1t@exblog.jp', 'Sovetskaya', '8bNXT4RW');
insert into users (id, name, email, city, password) values (67, 'Hollis Malamore', 'hmalamore1u@sourceforge.net', 'Bhamo', 'sZz4UpA');
insert into users (id, name, email, city, password) values (68, 'Roi Tween', 'rtween1v@nps.gov', 'Nyagan', 'JSLug1w9q7H');
insert into users (id, name, email, city, password) values (69, 'Otto Iliffe', 'oiliffe1w@oracle.com', 'Aleksandrovskiy Zavod', '9yB2WY4nW');
insert into users (id, name, email, city, password) values (70, 'Shaylynn Girdlestone', 'sgirdlestone1x@globo.com', 'Cikoneng', 'u6PftqaQ');
insert into users (id, name, email, city, password) values (71, 'Alena Cayton', 'acayton1y@merriam-webster.com', 'Nagasari', 'N8WEWJj');
insert into users (id, name, email, city, password) values (72, 'Kaylyn Kasher', 'kkasher1z@gmpg.org', 'Buenavista', 'kCD67yjUir');
insert into users (id, name, email, city, password) values (73, 'Phyllis Stebbings', 'pstebbings20@umich.edu', 'Palangan', 'EK8eJPqg');
insert into users (id, name, email, city, password) values (74, 'Valma Harg', 'vharg21@xing.com', 'Cortinhas', 'UCwkIHmHg1h');
insert into users (id, name, email, city, password) values (75, 'Rodi Dale', 'rdale22@cnn.com', 'Shapa', 'irHb52');
insert into users (id, name, email, city, password) values (76, 'Sidney Simkiss', 'ssimkiss23@adobe.com', 'Shupenzë', 'trVoE8iGhW');
insert into users (id, name, email, city, password) values (77, 'Theresina Jorioz', 'tjorioz24@sciencedirect.com', 'Melbourne', 'YxumKHCDiE8');
insert into users (id, name, email, city, password) values (78, 'Teddie Carty', 'tcarty25@macromedia.com', 'Vrilissia', 'd2Qx8w4cpI');
insert into users (id, name, email, city, password) values (79, 'Ramonda Chadwick', 'rchadwick26@github.com', 'Murtajih', 'Oxt7DA0x');
insert into users (id, name, email, city, password) values (80, 'Meggi Tussaine', 'mtussaine27@imdb.com', 'Cucuyagua', 'BFLcMJa8p06T');
insert into users (id, name, email, city, password) values (81, 'Franny Kamall', 'fkamall28@ebay.co.uk', 'Huddinge', 'MxvdTBFh');
insert into users (id, name, email, city, password) values (82, 'Ramonda Saltman', 'rsaltman29@bluehost.com', 'Calvário', 'Th5ghTMjmE');
insert into users (id, name, email, city, password) values (83, 'Layla Nasey', 'lnasey2a@biblegateway.com', 'Shuitian', 'Hg09do1zl1Ng');
insert into users (id, name, email, city, password) values (84, 'Chrissie Baroux', 'cbaroux2b@digg.com', 'Gjinkar', 'olqJ6B4Xbf');
insert into users (id, name, email, city, password) values (85, 'Burg Spering', 'bspering2c@biblegateway.com', 'Oxbow', '192w2gIu');
insert into users (id, name, email, city, password) values (86, 'Car Mattei', 'cmattei2d@flavors.me', 'Gävle', 'EeeR8o5');
insert into users (id, name, email, city, password) values (87, 'Ingmar Von Salzberg', 'ivon2e@bigcartel.com', 'Andros Town', 'Lu8ZsUTcc1JX');
insert into users (id, name, email, city, password) values (88, 'Oren Kittle', 'okittle2f@aol.com', 'Dongxiao', '3N2U4ljjiO22');
insert into users (id, name, email, city, password) values (89, 'Willey Gallatly', 'wgallatly2g@shop-pro.jp', 'Morelos', 'yPhX3jO27');
insert into users (id, name, email, city, password) values (90, 'Port Pallis', 'ppallis2h@trellian.com', 'Butwāl', 'ZNbkxd6B7Bnx');
insert into users (id, name, email, city, password) values (91, 'Pincus Freire', 'pfreire2i@amazon.de', 'Timóteo', 'Sc9pdTqnRoSA');
insert into users (id, name, email, city, password) values (92, 'Jeddy Iapico', 'jiapico2j@cisco.com', 'Cajamarca', '8zIfhtamR');
insert into users (id, name, email, city, password) values (93, 'Nicolai Izsak', 'nizsak2k@delicious.com', 'El Mirador', 'LsUj19SFhp');
insert into users (id, name, email, city, password) values (94, 'Mathian Mackro', 'mmackro2l@answers.com', 'Xylaganí', 'wefsV0v');
insert into users (id, name, email, city, password) values (95, 'Tymothy Momery', 'tmomery2m@discuz.net', 'Wangkung', 'PewwKb1r1o');
insert into users (id, name, email, city, password) values (96, 'Kelsey Easbie', 'keasbie2n@paypal.com', 'Ōtsuki', 'ggrn9l4FQ');
insert into users (id, name, email, city, password) values (97, 'Rolland Labb', 'rlabb2o@wp.com', 'Huifa', 'c1mZDrNGpQJ');
insert into users (id, name, email, city, password) values (98, 'Truda Liles', 'tliles2p@uol.com.br', 'Parreira', 'LZKfvYF2xV');
insert into users (id, name, email, city, password) values (99, 'Chandler Goodin', 'cgoodin2q@prlog.org', 'Dengmu', 'IfCyJkxy');
insert into users (id, name, email, city, password) values (100, 'Reeta Roncelli', 'rroncelli2r@multiply.com', 'Olds', 'ZdSqQUca');