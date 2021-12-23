
const allTheWords = [
'ABAC', 'ABAS', 'ABBA', 'ABED', 'ABET', 'ABID', 'ABLY', 'ACER', 'ACES', 'ACHY', 'ACME', 'ACTA', 'ACTS', 'ADAW', 'ADDS', 'ADIT', 'ADOS', 'ADRY', 'AEON', 'AERY', 'AFAR', 'AGAS', 'AGED', 'AGEE', 'AGHA', 'AGIO', 'AGMA', 'AGOG', 'AGON', 'AGUE', 'AHOY', 'AIGA', 'AIRY', 'AITU', 'AJAR', 'AKED', 'AKES', 'AKIN', 'ALAE', 'ALAN', 'ALAS', 'ALAY', 'ALBE', 'ALBS', 'ALCO', 'ALEE', 'ALEW', 'ALGA', 'ALIF', 'ALKO', 'ALMS', 'ALOW', 'AMAH', 'AMBO', 'AMID', 'AMIE', 'AMIN', 'AMMO', 'AMOK', 'AMPS', 'AMYL', 'ANAL', 'ANAN', 'ANCE', 'ANDS', 'ANIL', 'ANIS', 'ANKH', 'ANNA', 'ANOA', 'ANON', 'ANOW', 'ANSA', 'ANTA', 'ANTE', 'ANUS', 'APER', 'APOD', 'APOS', 'APSO', 'APTS', 'AQUA', 'ARAK', 'ARBS', 'ARCH', 'ARCS', 'ARED', 'ARET', 'AREW', 'ARFS', 'ARID', 'ARIL', 'ARKS', 'ARMS', 'ARMY', 'ARPA', 'ARSE', 'ARTI', 'ARTY', 'ARUM', 'ASAR', 'ASEA', 'ASKS', 'ATAP', 'ATES', 'AUKS', 'AURA', 'AUTO', 'AVES', 'AVID', 'AWDL', 'AWED', 'AWES', 'AWLS', 'AWNY', 'AWRY', 'AXEL', 'AXES', 'AXIS', 'AXON', 'AYAH', 'AYES', 'AYIN', 'AZAN', 'BAAS', 'BABA', 'BABU', 'BABY', 'BADE', 'BAEL', 'BAFF', 'BAGH', 'BAHT', 'BAIL', 'BAIT', 'BAJU', 'BAKE', 'BALE', 'BALM', 'BALU', 'BAMS', 'BANC', 'BAND', 'BANE', 'BANI', 'BANK', 'BANS', 'BAPS', 'BARD', 'BARK', 'BARP', 'BASE', 'BASH', 'BATE', 'BAUD', 'BAUK', 'BAUR', 'BAWD', 'BAWN', 'BAWR', 'BAYT', 'BEAD', 'BEAU', 'BEDU', 'BEEF', 'BEEP', 'BEER', 'BEES', 'BEET', 'BEIN', 'BELT', 'BENE', 'BENI', 'BENT', 'BERE', 'BERG', 'BERK', 'BETA', 'BETE', 'BEVY', 'BICE', 'BIDI', 'BIER', 'BIGG', 'BILK', 'BILL', 'BIMA', 'BIND', 'BINE', 'BINT', 'BIOG', 'BIRK', 'BIRO', 'BISE', 'BISH', 'BISK', 'BIZE', 'BLAB', 'BLAE', 'BLAG', 'BLAY', 'BLEB', 'BLEE', 'BLEY', 'BLOB', 'BLOG', 'BLOT', 'BLUE', 'BLUR', 'BOAB', 'BOAK', 'BOAR', 'BOBS', 'BODE', 'BODY', 'BOEP', 'BOET', 'BOGS', 'BOIS', 'BOLA', 'BOLD', 'BOLO', 'BOMA', 'BOMB', 'BOND', 'BONG', 'BONY', 'BOOB', 'BOOH', 'BOON', 'BOOR', 'BOOS', 'BOPS', 'BORA', 'BORD', 'BORE', 'BORM', 'BORN', 'BORS', 'BOTA', 'BOTH', 'BOTS', 'BOUN', 'BOWL', 'BOYF', 'BOYG', 'BRAE', 'BRAG', 'BRAK', 'BRAW', 'BRAY', 'BRED', 'BREE', 'BRER', 'BRIN', 'BRIO', 'BRIS', 'BROD', 'BROW', 'BRUT', 'BUBA', 'BUBU', 'BUDA', 'BUFF', 'BUHL', 'BUHR', 'BUIK', 'BUKE', 'BULB', 'BUMF', 'BUNA', 'BUNK', 'BUNN', 'BUNT', 'BUOY', 'BURA', 'BURB', 'BURD', 'BURG', 'BURK', 'BURL', 'BURS', 'BUSH', 'BUSK', 'BUST', 'BUSY', 'BUTS', 'BUYS', 'BUZZ', 'BYDE', 'BYKE', 'CACA', 'CADI', 'CAFF', 'CAGE', 'CAGY', 'CAKE', 'CAKY', 'CALF', 'CALK', 'CALM', 'CALO', 'CALX', 'CAMO', 'CAMP', 'CANG', 'CANT', 'CAPH', 'CAPI', 'CAPO', 'CAPS', 'CARE', 'CARS', 'CART', 'CAST', 'CATS', 'CAUF', 'CAUK', 'CAUL', 'CAVE', 'CAVY', 'CAYS', 'CEAS', 'CECA', 'CEDE', 'CEIL', 'CELS', 'CENS', 'CEPE', 'CERT', 'CESS', 'CETE', 'CHAD', 'CHAI', 'CHAL', 'CHAM', 'CHAO', 'CHAP', 'CHAT', 'CHAW', 'CHAY', 'CHER', 'CHEW', 'CHEZ', 'CHIA', 'CHID', 'CHIP', 'CHIV', 'CHIZ', 'CHUB', 'CHUG', 'CHUM', 'CHUT', 'CIAO', 'CIDE', 'CIEL', 'CIGS', 'CILL', 'CINE', 'CION', 'CITE', 'CITO', 'CITY', 'CLAD', 'CLAG', 'CLAM', 'CLAP', 'CLAY', 'CLEM', 'CLOD', 'CLOG', 'CLOY', 'COAT', 'COAX', 'COBB', 'COBS', 'COCA', 'COCH', 'COCK', 'CODA', 'COED', 'COFF', 'COFT', 'COIF', 'COIL', 'COIN', 'COIR', 'COIT', 'COKE', 'COKY', 'COLA', 'COLD', 'COLS', 'COLY', 'COMB', 'COMP', 'COMS', 'COND', 'CONF', 'CONK', 'CONS', 'COOK', 'COOL', 'COOM', 'COON', 'CORD', 'CORF', 'CORK', 'CORM', 'CORN', 'COSE', 'COSH', 'COSS', 'COST', 'COSY', 'COTE', 'COTT', 'COUR', 'COVE', 'COWY', 'COXA', 'COYS', 'COZE', 'CRAB', 'CRAP', 'CRAW', 'CRED', 'CREM', 'CREW', 'CRIB', 'CRIT', 'CROC', 'CROG', 'CRUD', 'CRUE', 'CUDS', 'CUED', 'CUES', 'CUIT', 'CUKE', 'CULL', 'CULM', 'CUPS', 'CURD', 'CURL', 'CURN', 'CUSK', 'CUSP', 'CUTE', 'CWMS', 'CYME', 'CYST', 'CZAR', 'DABS', 'DADA', 'DADO', 'DAES', 'DAFT', 'DAGO', 'DALT', 'DAME', 'DAMP', 'DANT', 'DAPS', 'DARG', 'DARI', 'DARN', 'DART', 'DATA', 'DAUB', 'DAVY', 'DAWD', 'DAWS', 'DAZE', 'DEAF', 'DEAL', 'DEAW', 'DEBT', 'DEED', 'DEER', 'DEES', 'DEFI', 'DEFY', 'DEGS', 'DELF', 'DELI', 'DELS', 'DEMO', 'DEMY', 'DENT', 'DENY', 'DERE', 'DERM', 'DERN', 'DEUS', 'DEVA', 'DEVS', 'DEWY', 'DEXY', 'DEYS', 'DHOL', 'DHOW', 'DIAL', 'DIBS', 'DICE', 'DICT', 'DIDO', 'DIDY', 'DIES', 'DIFF', 'DIFS', 'DIME', 'DIMP', 'DING', 'DINT', 'DIRE', 'DISK', 'DISS', 'DITA', 'DITS', 'DITT', 'DITZ', 'DIVA', 'DIVE', 'DIXY', 'DOAB', 'DOBY', 'DOCO', 'DOCS', 'DODO', 'DOER', 'DOES', 'DOFF', 'DOGE', 'DOIT', 'DOJO', 'DOLE', 'DOLL', 'DOLT', 'DOME', 'DOMY', 'DONA', 'DONE', 'DONG', 'DOON', 'DOPA', 'DOPY', 'DORB', 'DORE', 'DORK', 'DORY', 'DOSE', 'DOTH', 'DOUP', 'DOUR', 'DOUT', 'DOUX', 'DOWD', 'DOWL', 'DOWN', 'DOWT', 'DOXY', 'DOYS', 'DRAB', 'DRAG', 'DRAM', 'DRAP', 'DREW', 'DRIP', 'DROW', 'DRUG', 'DSOS', 'DUAN', 'DUAR', 'DUBS', 'DUCE', 'DUCK', 'DUES', 'DUFF', 'DUMA', 'DUMB', 'DUMP', 'DUNE', 'DUNK', 'DUNT', 'DUPE', 'DURA', 'DURE', 'DURO', 'DURR', 'DUSH', 'DUSK', 'DUTY', 'DWAM', 'DYER', 'DYES', 'DYKE', 'DZOS', 'EACH', 'EANS', 'EARL', 'EARN', 'EAST', 'EASY', 'EATH', 'EAUX', 'ECCE', 'ECHT', 'ECOD', 'ECOS', 'EDDO', 'EDDY', 'EDGY', 'EDHS', 'EDIT', 'EECH', 'EELY', 'EERY', 'EGAD', 'EGAL', 'EGER', 'EGGY', 'EGMA', 'EGOS', 'EIDE', 'EILD', 'EINA', 'EKED', 'EKKA', 'ELAN', 'ELFS', 'ELMS', 'ELTS', 'EMES', 'EMMA', 'EMMY', 'EMUS', 'ENEW', 'ENGS', 'ENOL', 'ENOW', 'ENVY', 'EOAN', 'EONS', 'EPEE', 'EPIC', 'EPOS', 'ERAS', 'ERES', 'ERGO', 'ERIC', 'ERNE', 'ERNS', 'ERRS', 'ERUV', 'ESNE', 'ESPY', 'ETAT', 'ETEN', 'ETHE', 'ETHS', 'EUKS', 'EVES', 'EVIL', 'EVOE', 'EXAM', 'EXED', 'EXES', 'EXIT', 'EXON', 'EXPO', 'EYED', 'EYEN', 'EYNE', 'EYRY', 'FAAN', 'FABS', 'FACT', 'FADO', 'FADS', 'FAFF', 'FAIK', 'FAKE', 'FALX', 'FAND', 'FARE', 'FARL', 'FARM', 'FARO', 'FART', 'FASH', 'FAST', 'FATE', 'FAUT', 'FAUX', 'FAZE', 'FEAT', 'FECK', 'FEDS', 'FEEB', 'FEED', 'FEEL', 'FEES', 'FEHS', 'FEMS', 'FENI', 'FENS', 'FERE', 'FERM', 'FESS', 'FEST', 'FETA', 'FETE', 'FETT', 'FEUD', 'FIAR', 'FIAT', 'FIBS', 'FICO', 'FIEF', 'FIFE', 'FIGO', 'FIGS', 'FIKY', 'FILA', 'FILE', 'FILO', 'FINE', 'FIRE', 'FIRS', 'FISC', 'FISK', 'FIST', 'FITS', 'FIXT', 'FLAG', 'FLAT', 'FLAX', 'FLAY', 'FLED', 'FLEE', 'FLEW', 'FLEY', 'FLIM', 'FLOC', 'FLOP', 'FLOR', 'FLOW', 'FLUX', 'FOAL', 'FOAM', 'FOBS', 'FOES', 'FOGS', 'FOHN', 'FOHS', 'FOIN', 'FOLD', 'FOND', 'FONE', 'FONS', 'FOOD', 'FOOL', 'FOPS', 'FORA', 'FORB', 'FORD', 'FORT', 'FOUD', 'FOUL', 'FOUS', 'FOXY', 'FOYS', 'FRAP', 'FRAT', 'FRAU', 'FRET', 'FRIB', 'FRIG', 'FRIZ', 'FROW', 'FRUG', 'FUBS', 'FUCI', 'FUCK', 'FUDS', 'FUGU', 'FULL', 'FUME', 'FUMY', 'FUND', 'FURL', 'FURS', 'FUSS', 'FUTZ', 'FUZE', 'FUZZ', 'GABY', 'GADI', 'GAED', 'GAEN', 'GAFF', 'GAGA', 'GAGS', 'GAIR', 'GAIT', 'GALA', 'GAMS', 'GANE', 'GANS', 'GAPO', 'GAPY', 'GART', 'GASH', 'GATE', 'GATH', 'GATS', 'GAUD', 'GAVE', 'GAWP', 'GAYS', 'GAZE', 'GAZY', 'GEAN', 'GEAT', 'GECK', 'GEIT', 'GELD', 'GEMS', 'GENE', 'GENS', 'GENT', 'GENU', 'GERE', 'GERM', 'GERT', 'GETA', 'GETS', 'GHEE', 'GHIS', 'GIBS', 'GIDS', 'GIED', 'GIEN', 'GIGA', 'GILA', 'GILD', 'GILL', 'GIMP', 'GING', 'GINK', 'GIOS', 'GIRN', 'GISM', 'GIST', 'GJUS', 'GLAM', 'GLEG', 'GLEI', 'GLEN', 'GLEY', 'GLIB', 'GLID', 'GLIM', 'GLIT', 'GLOP', 'GLUE', 'GLUG', 'GLUM', 'GLUT', 'GNAR', 'GNAT', 'GNAW', 'GNOW', 'GOAD', 'GOAS', 'GOBS', 'GOBY', 'GOFF', 'GOLD', 'GOLE', 'GOLF', 'GONE', 'GOOD', 'GOOK', 'GOON', 'GOOR', 'GORY', 'GOSH', 'GOSS', 'GOUT', 'GOVS', 'GRAB', 'GRAD', 'GRAT', 'GRAV', 'GREW', 'GRID', 'GRIG', 'GRIS', 'GRIT', 'GROG', 'GROW', 'GRUB', 'GRUE', 'GRUM', 'GUAN', 'GUAR', 'GUBS', 'GUDE', 'GUFF', 'GUGA', 'GUID', 'GULA', 'GULY', 'GUMP', 'GUNG', 'GUNK', 'GURN', 'GURS', 'GUSH', 'GUST', 'GUTS', 'GYMP', 'GYMS', 'GYPS', 'GYRE', 'HAAF', 'HAAR', 'HACK', 'HADS', 'HAEN', 'HAES', 'HAIK', 'HAIL', 'HAIN', 'HAJI', 'HAJJ', 'HAKA', 'HALF', 'HALM', 'HALO', 'HALT', 'HAME', 'HAMS', 'HANG', 'HANK', 'HARD', 'HARM', 'HARO', 'HARP', 'HASH', 'HAST', 'HATS', 'HAUD', 'HAUL', 'HAUT', 'HAWK', 'HAWM', 'HAWS', 'HAZE', 'HEAD', 'HEAL', 'HEAP', 'HEAT', 'HECH', 'HECK', 'HEEL', 'HEFT', 'HEHS', 'HEIL', 'HELD', 'HELL', 'HELM', 'HELO', 'HELP', 'HEMP', 'HENT', 'HEPS', 'HERB', 'HERE', 'HERY', 'HEST', 'HETE', 'HETH', 'HEWS', 'HEYS', 'HIDE', 'HIGH', 'HIKE', 'HILA', 'HILD', 'HILL', 'HILT', 'HIND', 'HINS', 'HIPS', 'HIPT', 'HIST', 'HITS', 'HIZZ', 'HOAR', 'HOAX', 'HOBO', 'HOER', 'HOES', 'HOGG', 'HOHA', 'HOKE', 'HOKI', 'HOLD', 'HOLE', 'HOLP', 'HOLS', 'HOMS', 'HOMY', 'HOND', 'HONE', 'HONK', 'HONS', 'HOOD', 'HOOF', 'HOOT', 'HOPE', 'HORA', 'HORE', 'HOSE', 'HOTS', 'HOUR', 'HOVE', 'HOWE', 'HOYS', 'HUCK', 'HUFF', 'HUGE', 'HUGS', 'HUIA', 'HUIC', 'HUIS', 'HULL', 'HUMF', 'HUMP', 'HUNG', 'HUNK', 'HUNT', 'HUPS', 'HURL', 'HURT', 'HUSH', 'HUSO', 'HUSS', 'HWYL', 'HYES', 'HYKE', 'HYLA', 'HYLE', 'HYPE', 'HYPS', 'IAMB', 'ICER', 'ICES', 'ICHS', 'ICKY', 'IDEA', 'IDLY', 'IDYL', 'IGLU', 'ILEX', 'ILIA', 'ILKA', 'ILLY', 'IMID', 'IMPI', 'IMPS', 'INBY', 'INCH', 'INGO', 'INIA', 'INKY', 'INNS', 'INRO', 'INTI', 'INTO', 'IOTA', 'IRED', 'IRES', 'IRON', 'ISIT', 'ISMS', 'ISOS', 'ITCH', 'IXIA', 'IZAR', 'JABS', 'JADE', 'JAGA', 'JAGG', 'JAGS', 'JAIL', 'JAKE', 'JAMS', 'JANN', 'JAPE', 'JAPS', 'JASP', 'JASS', 'JASY', 'JAWS', 'JAZY', 'JEAN', 'JEED', 'JEEL', 'JEEP', 'JEEZ', 'JELL', 'JERK', 'JETS', 'JEUX', 'JIAO', 'JIBS', 'JILT', 'JINK', 'JINN', 'JINS', 'JISM', 'JOBE', 'JOCK', 'JOES', 'JOGS', 'JOIN', 'JOKY', 'JOLE', 'JOLL', 'JOLT', 'JONG', 'JORS', 'JOSS', 'JOTA', 'JOTS', 'JOUK', 'JOWS', 'JOYS', 'JUBE', 'JUCO', 'JUDY', 'JUGA', 'JUGS', 'JUMP', 'JURE', 'JURY', 'JUST', 'JUTS', 'JUVE', 'KAAL', 'KAED', 'KAES', 'KAFS', 'KAKI', 'KAKS', 'KAMA', 'KANA', 'KAON', 'KARA', 'KARN', 'KARO', 'KART', 'KATI', 'KATS', 'KAVA', 'KAWS', 'KAYO', 'KAYS', 'KAZI', 'KBAR', 'KECK', 'KEDS', 'KEEN', 'KEFS', 'KELL', 'KELT', 'KEMB', 'KEMP', 'KENS', 'KEPI', 'KEPS', 'KERB', 'KERF', 'KERN', 'KERO', 'KESH', 'KEST', 'KETA', 'KETO', 'KEWL', 'KEYS', 'KHAF', 'KHET', 'KHOR', 'KHUD', 'KIFF', 'KIKE', 'KILD', 'KILN', 'KILO', 'KILP', 'KILT', 'KIND', 'KING', 'KINO', 'KINS', 'KIPS', 'KISH', 'KIST', 'KIVA', 'KIWI', 'KLIK', 'KNAP', 'KNEE', 'KNEW', 'KNIT', 'KNOB', 'KNOP', 'KNOW', 'KOHL', 'KOJI', 'KOLO', 'KOND', 'KONK', 'KOOK', 'KORO', 'KORU', 'KOSS', 'KRAB', 'KRIS', 'KSAR', 'KUDU', 'KUES', 'KUNA', 'KURU', 'KUTA', 'KYAK', 'KYLE', 'KYND', 'KYNE', 'KYTE', 'LACK', 'LACY', 'LADY', 'LAER', 'LAGS', 'LAHS', 'LAIK', 'LAIN', 'LAKY', 'LALL', 'LAMA', 'LAMS', 'LAND', 'LANE', 'LANK', 'LANX', 'LARD', 'LARI', 'LARN', 'LASH', 'LATH', 'LATI', 'LAVE', 'LAVS', 'LAWN', 'LAZE', 'LAZY', 'LEAD', 'LEAF', 'LEAK', 'LEAL', 'LEAM', 'LEAN', 'LEAS', 'LEAT', 'LECH', 'LEED', 'LEEK', 'LEEP', 'LEER', 'LEES', 'LEET', 'LEFT', 'LEKS', 'LEME', 'LEND', 'LENG', 'LENO', 'LENS', 'LENT', 'LEPS', 'LERE', 'LERP', 'LEVO', 'LEVY', 'LEYS', 'LIAS', 'LICE', 'LICH', 'LICK', 'LIDO', 'LIDS', 'LIED', 'LIEF', 'LIEN', 'LIEU', 'LIFT', 'LIGS', 'LIKE', 'LILL', 'LILO', 'LILT', 'LIMB', 'LIME', 'LIMN', 'LIMO', 'LIMP', 'LIND', 'LINE', 'LINK', 'LINN', 'LINO', 'LINS', 'LINY', 'LIPA', 'LIRI', 'LIRK', 'LISK', 'LISP', 'LITE', 'LITH', 'LITU', 'LOAD', 'LOAF', 'LOAM', 'LOAN', 'LOBE', 'LOBS', 'LOCK', 'LODE', 'LODS', 'LOGE', 'LOGS', 'LOID', 'LOIN', 'LOIR', 'LOKE', 'LOME', 'LOOF', 'LOOR', 'LOOT', 'LOPE', 'LOPS', 'LORD', 'LORE', 'LORN', 'LOSE', 'LOSH', 'LOSS', 'LOTS', 'LOUD', 'LOUS', 'LOWN', 'LOWP', 'LOYS', 'LUAU', 'LUCE', 'LUCK', 'LUES', 'LUFF', 'LUGS', 'LUIT', 'LUKE', 'LULL', 'LULU', 'LUNA', 'LUNE', 'LUNG', 'LUNK', 'LUNY', 'LURE', 'LUSH', 'LUST', 'LUVS', 'LYES', 'LYME', 'LYNE', 'LYNX', 'LYSE', 'LYTE', 'MAAR', 'MABE', 'MACE', 'MACH', 'MADE', 'MADS', 'MAGE', 'MAGG', 'MAGS', 'MAID', 'MAIK', 'MAIL', 'MAIN', 'MAIR', 'MALA', 'MALI', 'MALL', 'MALM', 'MALS', 'MAMS', 'MAND', 'MANE', 'MANO', 'MANY', 'MARA', 'MARC', 'MARE', 'MARG', 'MARK', 'MARS', 'MART', 'MASE', 'MATT', 'MAUD', 'MAWK', 'MAWR', 'MAWS', 'MAXI', 'MAYO', 'MEAN', 'MECK', 'MEDS', 'MEET', 'MEFF', 'MEGS', 'MELA', 'MELD', 'MELL', 'MELS', 'MEND', 'MENG', 'MENT', 'MENU', 'MEOU', 'MEOW', 'MERE', 'MERI', 'MESA', 'MESE', 'MESS', 'META', 'METS', 'MEUS', 'MEWL', 'MEWS', 'MICE', 'MICS', 'MIEN', 'MIFF', 'MIGG', 'MIGS', 'MIHI', 'MIKE', 'MILD', 'MILE', 'MILS', 'MIME', 'MINA', 'MINE', 'MINK', 'MINX', 'MIPS', 'MIRK', 'MIRO', 'MIRS', 'MISS', 'MIST', 'MITY', 'MIXT', 'MIXY', 'MIZZ', 'MOAN', 'MOAS', 'MOBY', 'MOCS', 'MODE', 'MODI', 'MODS', 'MOFO', 'MOGS', 'MOHR', 'MOIL', 'MOIT', 'MOJO', 'MOKO', 'MOLA', 'MOLD', 'MOLL', 'MOLT', 'MOME', 'MOMS', 'MOOS', 'MOOT', 'MOPE', 'MOPS', 'MORN', 'MORS', 'MORT', 'MOSH', 'MOSK', 'MOST', 'MOTE', 'MOTI', 'MOTS', 'MOTU', 'MOWA', 'MOWN', 'MOXA', 'MOZO', 'MOZZ', 'MUCK', 'MUDS', 'MUGG', 'MUGS', 'MUID', 'MUIL', 'MUIR', 'MULE', 'MUMM', 'MUMP', 'MUMS', 'MUMU', 'MUNI', 'MUNS', 'MURA', 'MURL', 'MUSO', 'MUSS', 'MUST', 'MUTE', 'MUTT', 'MYAL', 'MYCS', 'MYXO', 'NAAM', 'NAAN', 'NABK', 'NACH', 'NAFF', 'NAGA', 'NAGS', 'NAIF', 'NAMS', 'NANE', 'NANS', 'NAOI', 'NAPA', 'NAPE', 'NAPS', 'NARE', 'NARK', 'NARY', 'NATS', 'NAVE', 'NAYS', 'NEAL', 'NEAP', 'NEAR', 'NEAT', 'NECK', 'NEDS', 'NEED', 'NEFS', 'NEGS', 'NEKS', 'NEMN', 'NEPS', 'NERK', 'NESH', 'NETE', 'NETT', 'NEVE', 'NEVI', 'NEWT', 'NEXT', 'NIBS', 'NIDE', 'NIEF', 'NIES', 'NILL', 'NILS', 'NIMB', 'NINE', 'NIPA', 'NIRL', 'NITE', 'NITS', 'NIXE', 'NIXY', 'NOAH', 'NOBS', 'NODE', 'NODI', 'NODS', 'NOGG', 'NOIR', 'NOLE', 'NOLL', 'NOLO', 'NOME', 'NOMS', 'NONA', 'NONE', 'NOOK', 'NOON', 'NOPE', 'NORK', 'NORM', 'NOSE', 'NOSY', 'NOTA', 'NOTE', 'NOTT', 'NOUL', 'NOUN', 'NOUP', 'NOUS', 'NOUT', 'NOWS', 'NOWY', 'NOYS', 'NUKE', 'NULL', 'NYAS', 'NYED', 'OAKY', 'OARS', 'OAST', 'OATH', 'OATS', 'OBAS', 'OBEY', 'OBIS', 'OBOE', 'OBOL', 'OCHE', 'ODAH', 'ODAL', 'ODAS', 'ODDS', 'ODEA', 'ODIC', 'ODOR', 'OFAY', 'OGAM', 'OHED', 'OHOS', 'OILS', 'OILY', 'OKAS', 'OKEH', 'OKES', 'OLDS', 'OLEO', 'OLES', 'OLID', 'OLMS', 'OLPE', 'OMBU', 'OMEN', 'OMER', 'OMOV', 'ONCE', 'ONES', 'ONOS', 'ONTO', 'ONUS', 'OOFY', 'OOHS', 'OOMS', 'OONS', 'OOPS', 'OOSE', 'OOSY', 'OOZE', 'OPAH', 'OPAL', 'OPEN', 'OPPO', 'OPUS', 'ORAD', 'ORAL', 'ORBY', 'ORCA', 'ORCS', 'ORES', 'ORGY', 'ORLE', 'ORRA', 'ORTS', 'OSAR', 'OTTO', 'OUDS', 'OULD', 'OUPH', 'OURN', 'OUZO', 'OVEL', 'OVEN', 'OWED', 'OWES', 'OWLS', 'OWRE', 'OWTS', 'OXER', 'OXES', 'OXIM', 'OYER', 'OYES', 'PACA', 'PACK', 'PACO', 'PACS', 'PACY', 'PADS', 'PAGE', 'PAHS', 'PAIK', 'PAIL', 'PAIR', 'PAIS', 'PALE', 'PALL', 'PALM', 'PALP', 'PAMS', 'PANG', 'PANS', 'PAPE', 'PAPS', 'PARA', 'PARD', 'PATE', 'PATU', 'PAUA', 'PAUL', 'PAWS', 'PAYS', 'PEAN', 'PEAR', 'PEAS', 'PEAT', 'PECH', 'PECK', 'PEEP', 'PEER', 'PEGH', 'PEGS', 'PEHS', 'PEKE', 'PELA', 'PELE', 'PELF', 'PELT', 'PENE', 'PENI', 'PEON', 'PEPO', 'PEPS', 'PERK', 'PERM', 'PERT', 'PEWS', 'PFUI', 'PHIZ', 'PHOS', 'PHOT', 'PHUT', 'PIAL', 'PIAS', 'PICA', 'PICS', 'PIED', 'PIER', 'PIET', 'PIGS', 'PIKA', 'PIKE', 'PIKI', 'PILA', 'PILI', 'PILL', 'PILY', 'PINA', 'PINE', 'PING', 'PINS', 'PIPA', 'PIPE', 'PIPI', 'PIPY', 'PIRL', 'PIRN', 'PIRS', 'PISS', 'PITS', 'PIUM', 'PIZE', 'PLAP', 'PLAY', 'PLEB', 'PLEW', 'PLEX', 'PLOD', 'PLOW', 'PLUE', 'PLUS', 'POAS', 'POCO', 'PODS', 'POEP', 'POET', 'POGO', 'POGY', 'POIS', 'POKE', 'POLK', 'POLL', 'POLT', 'POLY', 'POME', 'POND', 'PONG', 'PONK', 'PONS', 'POOF', 'POOK', 'POOL', 'POON', 'POOP', 'POOR', 'POOT', 'POPE', 'PORK', 'PORN', 'PORT', 'PORY', 'POST', 'POSY', 'POTT', 'POUK', 'POUR', 'POWN', 'POZZ', 'PRAD', 'PRAM', 'PRAU', 'PRAY', 'PREP', 'PREZ', 'PRIM', 'PROF', 'PROG', 'PROM', 'PROP', 'PROS', 'PROW', 'PRUH', 'PRYS', 'PTUI', 'PUBE', 'PUBS', 'PUCE', 'PUCK', 'PUDS', 'PUFF', 'PUGH', 'PUJA', 'PUKA', 'PUKU', 'PULE', 'PULK', 'PULL', 'PULU', 'PUMA', 'PUNG', 'PUNT', 'PUNY', 'PUPA', 'PUPU', 'PURR', 'PURS', 'PUSH', 'PUSS', 'PUTS', 'PUTZ', 'PYAT', 'PYES', 'PYIN', 'PYNE', 'PYOT', 'PYRO', 'QATS', 'QOPH', 'QUAD', 'QUID', 'QUIT', 'QUOP', 'RABI', 'RACE', 'RAFF', 'RAFT', 'RAGE', 'RAGG', 'RAGS', 'RAHS', 'RAIA', 'RAID', 'RAIN', 'RAJA', 'RAMI', 'RANK', 'RAPT', 'RASE', 'RASP', 'RAST', 'RATA', 'RATE', 'RATO', 'RATU', 'RAVE', 'RAYS', 'RAZZ', 'REAK', 'REAL', 'REAM', 'REAP', 'REAR', 'RECK', 'RECS', 'REDE', 'REDS', 'REED', 'REEF', 'REEL', 'REEN', 'REES', 'REFT', 'REGS', 'REIK', 'REKE', 'REMS', 'RENT', 'REPS', 'RETE', 'RHUS', 'RIAL', 'RIAS', 'RIBA', 'RIBS', 'RICH', 'RIEL', 'RIEM', 'RIFE', 'RIFF', 'RIFT', 'RIGG', 'RIGS', 'RILE', 'RIMU', 'RIMY', 'RIND', 'RINE', 'RINS', 'RIPE', 'RIPS', 'RISE', 'RISK', 'RITT', 'ROAN', 'ROAR', 'ROBS', 'ROCS', 'RODS', 'ROED', 'ROIL', 'ROKE', 'ROKY', 'ROLL', 'ROMA', 'ROMP', 'RONE', 'RONG', 'ROOK', 'ROOM', 'ROOT', 'ROPE', 'RORT', 'ROST', 'ROSY', 'ROTI', 'ROTL', 'ROTO', 'ROTS', 'ROUL', 'ROVE', 'ROWS', 'RUBS', 'RUBY', 'RUDS', 'RUED', 'RUGA', 'RUGS', 'RUIN', 'RUKH', 'RULY', 'RUMP', 'RUMS', 'RUNE', 'RUNT', 'RUSK', 'RUST', 'RUTH', 'RUTS', 'RYFE', 'SABE', 'SABS', 'SACK', 'SADO', 'SAFT', 'SAGA', 'SAGE', 'SAGO', 'SAIL', 'SALL', 'SALP', 'SALS', 'SAME', 'SAMP', 'SANS', 'SANT', 'SARD', 'SARI', 'SASH', 'SATE', 'SAUT', 'SAVS', 'SAWN', 'SAXE', 'SAYS', 'SCAG', 'SCAM', 'SCAR', 'SCAW', 'SCOG', 'SCOW', 'SCRY', 'SCUD', 'SCUG', 'SCUL', 'SCUT', 'SCYE', 'SEAM', 'SEAN', 'SECO', 'SECS', 'SEEK', 'SEEN', 'SEER', 'SEES', 'SEGO', 'SEGS', 'SEIF', 'SEIL', 'SELE', 'SELS', 'SEND', 'SENE', 'SENS', 'SENT', 'SEPT', 'SERE', 'SERF', 'SERR', 'SESE', 'SESH', 'SETA', 'SETS', 'SEWS', 'SEXT', 'SEXY', 'SEYS', 'SHAD', 'SHAM', 'SHAN', 'SHAW', 'SHES', 'SHEW', 'SHIM', 'SHIR', 'SHMO', 'SHOD', 'SHOG', 'SHOO', 'SHOW', 'SHRI', 'SHUN', 'SHUT', 'SIBB', 'SICE', 'SICH', 'SIDA', 'SIES', 'SIFT', 'SIGH', 'SIKA', 'SIKE', 'SILD', 'SILE', 'SILK', 'SILO', 'SIMA', 'SIMP', 'SIMS', 'SIND', 'SINH', 'SINS', 'SITH', 'SITZ', 'SIZY', 'SKAT', 'SKAW', 'SKIN', 'SKIO', 'SKIP', 'SKIS', 'SKOL', 'SKRY', 'SKUA', 'SKUG', 'SKYR', 'SLAP', 'SLEE', 'SLEW', 'SLEY', 'SLIM', 'SLOB', 'SLOT', 'SLUB', 'SLUM', 'SLUR', 'SLUT', 'SMUT', 'SNAP', 'SNAR', 'SNAW', 'SNEB', 'SNED', 'SNEE', 'SNIB', 'SNIP', 'SNOB', 'SNOD', 'SNOG', 'SNOT', 'SNOW', 'SNUB', 'SNUG', 'SNYE', 'SOAP', 'SOAR', 'SOBA', 'SOBS', 'SOCA', 'SOCK', 'SOCS', 'SODA', 'SOFT', 'SOHS', 'SOLA', 'SOLO', 'SOLS', 'SOME', 'SOMY', 'SOOK', 'SOOL', 'SOOM', 'SOON', 'SOOP', 'SOOT', 'SOPS', 'SORB', 'SORI', 'SORT', 'SOUK', 'SOUL', 'SOUM', 'SOUR', 'SOWP', 'SOWS', 'SPAE', 'SPEW', 'SPIC', 'SPIF', 'SPIM', 'SPIN', 'SPIV', 'SPOD', 'SPRY', 'SPUD', 'SPUE', 'SPUG', 'SPUN', 'SPUR', 'STAG', 'STAP', 'STEN', 'STEP', 'STEW', 'STIR', 'STOP', 'STOT', 'STUM', 'STUN', 'STYE', 'SUBA', 'SUBS', 'SUCH', 'SUDD', 'SUET', 'SUGH', 'SUIT', 'SUKH', 'SUMY', 'SUNK', 'SUPS', 'SUQS', 'SURA', 'SUSU', 'SWAB', 'SWAG', 'SWAM', 'SWAN', 'SWAT', 'SWAY', 'SWEY', 'SWIG', 'SWIZ', 'SWOT', 'SWUM', 'SYED', 'SYEN', 'SYKE', 'SYPE', 'TABI', 'TABU', 'TACE', 'TACH', 'TADS', 'TAES', 'TAGS', 'TAIG', 'TAIL', 'TAIN', 'TAIS', 'TAKE', 'TAKI', 'TAKS', 'TALA', 'TALK', 'TAME', 'TAMS', 'TANA', 'TANE', 'TANH', 'TANK', 'TANS', 'TAOS', 'TAPA', 'TAPE', 'TAPS', 'TAPU', 'TARE', 'TARN', 'TART', 'TASH', 'TATT', 'TAUT', 'TAVA', 'TAWS', 'TEAD', 'TEAK', 'TEAL', 'TEAT', 'TECH', 'TECS', 'TEDS', 'TEEL', 'TEEM', 'TEGU', 'TEIL', 'TELD', 'TEND', 'TENT', 'TEST', 'TETS', 'TEWS', 'THAN', 'THAW', 'THEM', 'THIR', 'THIS', 'THON', 'THOU', 'THRO', 'THRU', 'THUG', 'THUS', 'TIAR', 'TICE', 'TICK', 'TICS', 'TIDE', 'TIDY', 'TIED', 'TIES', 'TIFT', 'TIGS', 'TILE', 'TILT', 'TIME', 'TIND', 'TINT', 'TINY', 'TIPI', 'TIPS', 'TIPT', 'TOAD', 'TOBY', 'TOCK', 'TODS', 'TOEY', 'TOGA', 'TOGE', 'TOGS', 'TOIT', 'TOKE', 'TOLE', 'TOLL', 'TOMO', 'TONK', 'TOOL', 'TOOM', 'TOON', 'TOPE', 'TOPH', 'TOPO', 'TOPS', 'TORE', 'TORI', 'TORN', 'TORS', 'TOSA', 'TOSE', 'TOST', 'TOTS', 'TOWN', 'TOWS', 'TOWT', 'TOWY', 'TOZE', 'TRAM', 'TRAY', 'TREK', 'TRES', 'TREW', 'TREY', 'TREZ', 'TRIE', 'TRIN', 'TROP', 'TROT', 'TROY', 'TRUE', 'TRYE', 'TRYP', 'TSAR', 'TUFF', 'TUFT', 'TULE', 'TUMP', 'TUNA', 'TUNG', 'TUNS', 'TURD', 'TURF', 'TURK', 'TURM', 'TURN', 'TUSH', 'TUTU', 'TWAE', 'TWAS', 'TWAY', 'TWEE', 'TWIN', 'TWIT', 'TWOS', 'TYDE', 'TYED', 'TYER', 'TYES', 'TYGS', 'TYKE', 'TYPO', 'TYPP', 'TYPY', 'TYRO', 'TZAR', 'UDAL', 'UEYS', 'UGHS', 'UGLY', 'ULAN', 'ULEX', 'ULVA', 'UMPH', 'UMPS', 'UMPY', 'UNAI', 'UNAU', 'UNBE', 'UNDE', 'UNDO', 'UNDY', 'UPAS', 'UPDO', 'UPON', 'UPTA', 'URAO', 'URDY', 'UREA', 'URES', 'URGE', 'URIC', 'URNS', 'URSA', 'UTES', 'UTIS', 'UTUS', 'UVAE', 'UVEA', 'VACS', 'VAIL', 'VAIN', 'VAIR', 'VALE', 'VANT', 'VARS', 'VARY', 'VATU', 'VAUT', 'VAWS', 'VEEP', 'VEER', 'VEES', 'VEGA', 'VEHM', 'VEIL', 'VELL', 'VENA', 'VENT', 'VERA', 'VERY', 'VEST', 'VETS', 'VIAL', 'VIAS', 'VIBS', 'VIER', 'VIES', 'VIGA', 'VIGS', 'VILE', 'VILL', 'VINE', 'VINO', 'VINT', 'VIRL', 'VISE', 'VITE', 'VIVE', 'VOES', 'VOID', 'VOLA', 'VOLE', 'VOLT', 'VORS', 'VOTE', 'VOWS', 'VROU', 'VROW', 'VUGH', 'VUMS', 'WABS', 'WADD', 'WADS', 'WAES', 'WAGS', 'WAIN', 'WAIR', 'WALE', 'WALL', 'WALY', 'WAME', 'WAND', 'WANE', 'WANG', 'WANT', 'WAPS', 'WARB', 'WARE', 'WARS', 'WART', 'WAST', 'WATT', 'WAUK', 'WAUR', 'WAWS', 'WAXY', 'WAYS', 'WEAL', 'WEDS', 'WEED', 'WEEK', 'WEEL', 'WEER', 'WEID', 'WEIL', 'WEIR', 'WELD', 'WELK', 'WEND', 'WENS', 'WERE', 'WERO', 'WETA', 'WETS', 'WEXE', 'WEYS', 'WHAE', 'WHAM', 'WHAT', 'WHEN', 'WHET', 'WHID', 'WHIM', 'WHIP', 'WHIT', 'WHIZ', 'WHOP', 'WHOT', 'WHUP', 'WHYS', 'WICH', 'WICK', 'WIFE', 'WILE', 'WILI', 'WILL', 'WIND', 'WING', 'WINN', 'WINS', 'WIPE', 'WIRE', 'WISP', 'WISS', 'WIST', 'WITE', 'WITH', 'WOAD', 'WOFS', 'WOKS', 'WOMB', 'WONT', 'WOON', 'WOOS', 'WORE', 'WOST', 'WRAP', 'WUDS', 'WULL', 'WYES', 'WYND', 'WYNN', 'WYNS', 'WYTE', 'YAAR', 'YABA', 'YADS', 'YAFF', 'YALE', 'YAMS', 'YAPP', 'YAPS', 'YARD', 'YATE', 'YAUD', 'YAWP', 'YAWY', 'YAYS', 'YEAD', 'YEAS', 'YECH', 'YEED', 'YELD', 'YELM', 'YELP', 'YENS', 'YERD', 'YERK', 'YEST', 'YETI', 'YETT', 'YEUK', 'YIDS', 'YIKE', 'YILL', 'YINS', 'YIPE', 'YIPS', 'YLEM', 'YMPT', 'YOBS', 'YODE', 'YOGA', 'YOGH', 'YOGI', 'YOKS', 'YOLD', 'YOMP', 'YOOF', 'YOOP', 'YORE', 'YORK', 'YORP', 'YOUK', 'YOUR', 'YOWE', 'YOWL', 'YUCH', 'YUGA', 'YUGS', 'YUKE', 'YUKY', 'YUPS', 'YUTZ', 'YUZU', 'YWIS', 'ZARF', 'ZEAL', 'ZEAS', 'ZEIN', 'ZELS', 'ZERK', 'ZERO', 'ZEST', 'ZHOS', 'ZIGS', 'ZILA', 'ZILL', 'ZIMB', 'ZINE', 'ZING', 'ZITI', 'ZITS', 'ZIZZ', 'ZOBO', 'ZOBU', 'ZOIC', 'ZOLS', 'ZONA', 'ZOOM', 'ZOUK', 'ZYGA', 'ZYME','SOLD','COTS','POTS','DOGS','BANG','BEEN','GODS','RATS'
];


//answer generation
let theAnswer = ""
const randomword = document.getElementById('randomword');
const dailyword = document.getElementById('wordoftheday');
const gameMode = document.getElementById('gametype');
randomword.addEventListener('click', randomNewWord);


function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function wordOfTheDay() {
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth();
    let int1 = parseInt(day) * parseInt(month);
    let int2 = Math.abs(parseInt(day) - parseInt(month))
    let i = 21*int2*int2;
    i -= 7;
    i -= int1;
    if (i>2692){
        i-=21;
        i+=int2
    }
    if (i>2692){
        i -=200;
    }
    console.log("i before abs: " + i)
    i = Math.abs(i);
    theAnswer = allTheWords[i];
    console.log('word of the day index: ' + i)
    resetGame()
    dailyword.style.backgroundColor = "#b3d9ff";
    randomword.style.backgroundColor = "#e6e6e6";
    gameMode.innerText = "You are playing the Word of the Day."
    randomword.addEventListener('click', randomNewWord);
    dailyword.removeEventListener('click', wordOfTheDay);

}

function randomNewWord(){
    let i = randomInteger(0, 16397);
    theAnswer = allTheWords[i];
    resetGame();
    randomword.style.backgroundColor = "#b3d9ff";
    dailyword.style.backgroundColor = "#e6e6e6";
    gameMode.innerText = "You are playing a Random Word."
    randomword.removeEventListener('click', randomNewWord);
    dailyword.addEventListener('click', wordOfTheDay);

}

//Build Boards
const wordboard = document.getElementById('wordboard');
let activeTile = 0;
let activeRow = 1;

function buildWordBoard() {
    for (let i =0; i<24; i++){
        let tile = document.createElement('div');
        tile.classList.add('tile');
        tile.id = `tile${i}`;
        tile.innerText = ' ';
        wordboard.appendChild(tile);
    }
 }

 buildWordBoard();
 //default to word of the day
 wordOfTheDay();

 const keyboard = document.getElementById('keyboard');

 function typeLetter(e) {
    let letter = ''
    let endOfRow = activeRow * 3 + (activeRow-1);
    letter = String.fromCharCode(e.keyCode);
    //enter
    if (e.keyCode == 13) {
        let newGuess = checkGuess(activeRow);
    }
    //backspace
    else if (e.keyCode == 8 || letter == 'delete'){
        if (activeTile > endOfRow - 3){
            --activeTile
        }
        let currentTile = document.getElementById(`tile${activeTile}`);
        currentTile.innerText = ' ';
        letter=''
    }
    //letters
    else if (activeTile <= endOfRow && letter.length < 2 && isLetter(letter)){
        let currentTile = document.getElementById(`tile${activeTile}`);
        currentTile.innerText = letter;
        ++activeTile;
    }

  };

  function clickLetter(e) {
    let letter = ''
    let endOfRow = activeRow * 3 + (activeRow-1);
    if (e.target.id && document.getElementById(e.target.id).className.includes('keyboardkey')==true){
        letter = e.target.id;
        if (letter == 'enter') {
            let newGuess = checkGuess(activeRow);
            
        }
        else if (e.keyCode == 8 || letter == 'delete'){
            if (activeTile > endOfRow - 3){
                --activeTile
            }
            let currentTile = document.getElementById(`tile${activeTile}`);
            currentTile.innerText = ' ';
        }
        //letters
        else if (activeTile <= endOfRow && letter.length < 2 && isLetter(letter)){
            let currentTile = document.getElementById(`tile${activeTile}`);
            currentTile.innerText = letter;
            ++activeTile;
        }
    }
}



window.addEventListener('keydown', typeLetter);
window.addEventListener('click', clickLetter);


//popup
const mainContainer = document.getElementById('main');
function popupModal(text){
    const modal = document.createElement('div');
    modal.id = 'popup';
    modal.classList.add('modal');
    mainContainer.appendChild(modal);
    const modalcontent = document.createElement('div');
    modalcontent.classList.add('modal-content');
    modal.appendChild(modalcontent);
    const xbutton = document.createElement('div');
    xbutton.classList.add('close');
    xbutton.id = 'closebutton';
    xbutton.innerText = 'X'
    modalcontent.appendChild(xbutton);
    const blankline = document.createElement('p');
    blankline.id = "blankline";
    modalcontent.appendChild(blankline);
    const popup = document.createElement('div');
    popup.id = 'popuptext';
    modalcontent.appendChild(popup);
    popup.innerText = `\n${text}`;
    xbutton.onclick = function() {
        modal.remove();
        event.stopPropagation();
        window.addEventListener('keydown', typeLetter);
        window.addEventListener('click', clickLetter);
    } 
}

//GUESS Functions
 function checkGuess(row){
     //row index starts at 1
    let rangeMin = ((row-1)*4);
    let rangeMax = row * 3 + (row-1);
    let guess =""
    for (let i=rangeMin; i<=rangeMax; i++){
         let letter = document.getElementById(`tile${i}`).innerText;
         guess += letter;
    }
    if (guess.length == 4 && allTheWords.includes(guess) == true){
        checkLetters(guess);
        ++activeRow
    }
    else {
        popupModal(guess.toUpperCase() + "  is not a valid word. Try again.");
        window.removeEventListener('keydown', typeLetter);
        window.removeEventListener('click', clickLetter);

    }
 }
 function checkLetters(guess){
     let correctLetters = 0
     for (let i=0; i<4; i++){
         let tileIndex = ((activeRow-1)*4) + i;
        if (guess[i] == theAnswer[i]){
            document.getElementById(`tile${tileIndex}`).classList.add('inplace');
            document.getElementById(guess[i].toUpperCase()).classList.add('inword');
            ++correctLetters;
            if (correctLetters == 4){
                    popupModal(`You won with ${activeRow} guesses.`);
                    window.removeEventListener('keydown', typeLetter);
                    window.removeEventListener('click', clickLetter);
                    randomword.addEventListener('click', randomNewWord);
                    
                    break;  
                }
            }
        else {
            for (let n=0; n<4; n++){
                if (guess[i] == theAnswer[n] && n !== i){
                    document.getElementById(`tile${tileIndex}`).classList.add('inword');
                    document.getElementById(guess[i].toUpperCase()).classList.add('inword');
                }
                else if (Array.from(theAnswer).includes(guess[i]) == false) {
                    document.getElementById(guess[i].toUpperCase()).classList.add('notinword');
                }
            }
        }
    }
    
    if (activeRow == 6 && correctLetters < 4){
        alert(`You lost. The answer was ${theAnswer.toUpperCase()}. Sorry. Better luck tomorrow.`);
    }
 }


    
function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

function resetGame(){
    for (let i =0; i<24; i++){
        let tile = document.getElementById(`tile${i}`);
        tile.innerText = ' ';
        tile.classList.remove('inword');
        tile.classList.remove('inplace');
    }
    const keys = document.querySelectorAll('.keyboardkey');
    keys.forEach(function(element){
        element.classList.remove('inword');
        element.classList.remove('notinword');

    });

    activeRow = 1;
    activeTile = 0;
    window.addEventListener('keydown', typeLetter);
    window.addEventListener('click', clickLetter);
 }


  ///oh god the corpus

