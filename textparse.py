# create a test file
from io import FileIO
import json



sitedict = [
 'ABED', 'ABET', 'ABID', 'ABLY', 'ACER', 'ACES', 'ACHY', 'ACME', 'ACTA', 'ACTS', 'ADDS', 'ADIT', 'ADOS', 'AEON', 'AERY', 'AFAR', 'AGAS', 'AGED', 'AGEE', 'AGHA', 'AGIO', 'AGMA', 'AGOG', 'AGON', 'AGUE', 'AHOY', 'AIGA', 'AIRY', 'AJAR', 'AKED', 'AKES', 'AKIN', 'ALAE', 'ALAN', 'ALAS', 'ALAY', 'ALBE', 'ALBS', 'ALCO', 'ALEE', 'ALEW', 'ALGA',  'ALKO', 'ALMS', 'ALOW', 'AMAH', 'AMBO', 'AMID', 'AMIE', 'AMIN', 'AMMO', 'AMOK', 'AMPS', 'AMYL', 'ANAL', 'ANAN', 'ANDS', 'ANIL', 'ANIS', 'ANKH', 'ANNA', 'ANOA', 'ANON', 'ANOW', 'ANSA', 'ANTA', 'ANTE', 'ANUS', 'APER', 'APOD', 'APOS', 'APTS', 'AQUA', 'ARCH', 'ARCS', 'ARID', 'ARIL', 'ARKS', 'ARMS', 'ARMY', 'ARPA', 'ARSE', 'ARTI', 'ARTY', 'ARUM', 'ASAR', 'ASEA', 'ASKS', 'AURA', 'AUTO', 'AVID', 'AWED', 'AWES', 'AWLS', 'AWNY', 'AWRY', 'AXEL', 'AXES', 'AXIS', 'AXON', 'AYAH', 'AYES', 'AYIN', 'AZAN', 'BAAS', 'BABA', 'BABU', 'BABY', 'BADE', 'BAEL', 'BAFF', 'BAGH', 'BAHT', 'BAIL', 'BAIT', 'BAKE', 'BALE', 'BALM', 'BALU', 'BAMS', 'BANC', 'BAND', 'BANE', 'BANI', 'BANK', 'BANS', 'BAPS', 'BARD', 'BARK', 'BARP', 'BASE', 'BASH', 'BATE', 'BAUD', 'BAUK', 'BAUR', 'BAWD', 'BAWN', 'BAWR', 'BAYT', 'BEAD', 'BEAU', 'BEDU', 'BEEF', 'BEEP', 'BEER', 'BEES', 'BEET', 'BELT', 'BENE', 'BENI', 'BENT', 'BERE', 'BERG', 'BERK', 'BETA', 'BETE', 'BEVY', 'BICE', 'BIDI', 'BIER', 'BIGG', 'BILK', 'BILL', 'BIMA', 'BIND', 'BINE', 'BLAB', 'BLAG', 'BLAY', 'BLEB', 'BLEE', 'BLEY', 'BLOB', 'BLOG', 'BLOT', 'BLUE', 'BLUR', 'BOAB', 'BOAK', 'BOAR', 'BOBS', 'BODE', 'BODY', 'BOEP', 'BOET', 'BOGS', 'BOIS', 'BOLA', 'BOLD', 'BOLO', 'BOMA', 'BOMB', 'BOND', 'BONG', 'BONY', 'BOOB', 'BOOH', 'BOON', 'BOOR', 'BOOS', 'BOPS', 'BORA', 'BORD', 'BORE', 'BORM', 'BORN', 'BORS', 'BOTA', 'BOTH', 'BOTS', 'BOUN', 'BOWL', 'BOYF', 'BOYG', 'BRAE', 'BRAG', 'BRAK', 'BRAW', 'BRAY', 'BRED', 'BREE', 'BRER', 'BRIN', 'BRIO', 'BRIS', 'BROD', 'BROW', 'BRUT', 'BUBA', 'BUBU', 'BUDA', 'BUFF', 'BUHL', 'BUHR', 'BUIK', 'BUKE', 'BULB', 'BUMF', 'BUNA', 'BUNK', 'BUNN', 'BUNT', 'BUOY', 'BURA', 'BURB', 'BURD', 'BURG', 'BURK', 'BURL', 'BURS', 'BUSH', 'BUSK', 'BUST', 'BUSY', 'BUTS', 'BUYS', 'BUZZ', 'BYDE', 'BYKE', 'CACA', 'CADI', 'CAFF', 'CAGE', 'CAGY', 'CAKE', 'CAKY', 'CALF', 'CALK', 'CALM', 'CALO', 'CAMO', 'CAMP', 'CANG', 'CANT', 'CAPH', 'CAPI', 'CAPO', 'CAPS', 'CARE', 'CARS', 'CART', 'CAST', 'CATS',  'CAVE', 'CAVY', 'CAYS', 'CEAS', 'CECA', 'CEDE', 'CEIL', 'CELS', 'CENS', 'CEPE', 'CERT', 'CESS', 'CETE', 'CHAD', 'CHAI', 'CHAL', 'CHAM', 'CHAO', 'CHAP', 'CHAT', 'CHAW', 'CHAY', 'CHER', 'CHEW', 'CHEZ', 'CHIA', 'CHID', 'CHIP', 'CHIV', 'CHIZ', 'CHUB', 'CHUG', 'CHUM', 'CHUT', 'CIAO', 'CIDE', 'CIEL', 'CIGS', 'CILL', 'CINE', 'CION', 'CITE', 'CITO', 'CITY', 'CLAD', 'CLAG', 'CLAM', 'CLAP', 'CLAY', 'CLEM', 'CLOD', 'CLOG', 'CLOY', 'COAT', 'COAX', 'COBB', 'COBS', 'COCA', 'COCH', 'COCK', 'CODA', 'COED', 'COFF', 'COFT', 'COIF', 'COIL', 'COIN', 'COIR', 'COIT', 'COKE', 'COKY', 'COLA', 'COLD', 'COLS', 'COLY', 'COMB', 'COMP', 'COMS', 'COND', 'CONF', 'CONK', 'CONS', 'COOK', 'COOL', 'COOM', 'COON', 'CORD', 'CORF', 'CORK', 'CORM', 'CORN', 'COSE', 'COSH', 'COSS', 'COST', 'COSY', 'COTE', 'COTT', 'COUR', 'COVE', 'COWY', 'COXA', 'COYS', 'COZE', 'CRAB', 'CRAP', 'CRAW', 'CRED', 'CREM', 'CREW', 'CRIB', 'CRIT', 'CROC', 'CROG', 'CRUD', 'CRUE', 'CUDS', 'CUED', 'CUES', 'CUIT', 'CUKE', 'CULL', 'CULM', 'CUPS', 'CURD', 'CURL', 'CURN', 'CUSK', 'CUSP', 'CUTE', 'CWMS', 'CYME', 'CYST', 'CZAR', 'DABS', 'DADA', 'DADO', 'DAES', 'DAFT', 'DAGO', 'DALT', 'DAME', 'DAMP', 'DANT', 'DAPS', 'DARG', 'DARI', 'DARN', 'DART', 'DATA', 'DAUB', 'DAVY', 'DAWD', 'DAWS', 'DAZE', 'DEAF', 'DEAL', 'DEAW', 'DEBT', 'DEED', 'DEER', 'DEES', 'DEFI', 'DEFY', 'DEGS', 'DELF', 'DELI', 'DELS', 'DEMO', 'DEMY', 'DENT', 'DENY', 'DERE', 'DERM', 'DERN', 'DEUS', 'DEVA', 'DEVS', 'DEWY', 'DEXY', 'DEYS', 'DHOL', 'DHOW', 'DIAL', 'DIBS', 'DICE', 'DICT', 'DIDO', 'DIDY', 'DIES', 'DIFF', 'DIFS', 'DIME', 'DIMP', 'DING', 'DINT', 'DIRE', 'DISK', 'DISS', 'DITA', 'DITS', 'DITT', 'DITZ', 'DIVA', 'DIVE', 'DIXY', 'DOAB', 'DOBY', 'DOCO', 'DOCS', 'DODO', 'DOER', 'DOES', 'DOFF', 'DOGE', 'DOJO', 'DOLE', 'DOLL', 'DOLT', 'DOME', 'DONA', 'DONE', 'DONG', 'DOON', 'DOPA', 'DOPY', 'DORB', 'DORE', 'DORK', 'DORY', 'DOSE', 'DOTH', 'DOUP', 'DOUR', 'DOWD', 'DOWL', 'DOWN', 'DRAB', 'DRAG', 'DRAM', 'DRAP', 'DREW', 'DRIP', 'DROW', 'DRUG', 'DUBS', 'DUCK', 'DUES', 'DUFF', 'DUMA', 'DUMB', 'DUMP', 'DUNE', 'DUNK', 'DUNT', 'DUPE', 'DURA', 'DURE', 'DURO', 'DURR', 'DUSH', 'DUSK', 'DUTY', 'DWAM', 'DYER', 'DYES', 'DYKE', 'DZOS', 'EACH', 'EANS', 'EARL', 'EARN', 'EAST', 'EASY', 'EATH', 'EAUX', 'ECCE', 'ECHT', 'ECOD', 'ECOS', 'EDDO', 'EDDY', 'EDGY', 'EDHS', 'EDIT', 'EECH', 'EELY', 'EERY', 'EGAD', 'EGAL', 'EGER', 'EGGY', 'EGMA', 'EGOS', 'EIDE', 'EILD', 'EINA', 'EKED', 'EKKA', 'ELAN', 'ELFS', 'ELMS', 'ELTS', 'EMES', 'EMMA', 'EMMY', 'EMUS', 'ENEW', 'ENGS', 'ENOL', 'ENOW', 'ENVY', 'EOAN', 'EONS', 'EPEE', 'EPIC', 'EPOS', 'ERAS', 'ERES', 'ERGO', 'ERIC', 'ERNE', 'ERNS', 'ERRS', 'ERUV', 'ESNE', 'ESPY', 'ETAT', 'ETEN', 'ETHE', 'ETHS', 'EUKS', 'EVES', 'EVIL', 'EVOE', 'EXAM', 'EXED', 'EXES', 'EXIT', 'EXON', 'EXPO', 'EYED', 'EYEN', 'EYNE', 'EYRY', 'FAAN', 'FABS', 'FACT', 'FADO', 'FADS', 'FAFF', 'FAIK', 'FAKE', 'FALX', 'FAND', 'FARE', 'FARL', 'FARM', 'FARO', 'FART', 'FASH', 'FAST', 'FATE', 'FAUT', 'FAUX', 'FAZE', 'FEAT', 'FECK', 'FEDS', 'FEEB', 'FEED', 'FEEL', 'FEES', 'FEHS',  'FENS', 'FESS', 'FEST', 'FETA', 'FETE', 'FETT', 'FEUD', 'FIAR', 'FIAT', 'FIBS', 'FICO', 'FIEF', 'FIFE', 'FIGS', 'FIKY', 'FILA', 'FILE', 'FILO', 'FINE', 'FIRE', 'FIRS', 'FISC', 'FISK', 'FIST', 'FITS', 'FLAT', 'FLAX', 'FLAY', 'FLED', 'FLEE', 'FLEW', 'FLEY', 'FLIM', 'FLOC', 'FLOP', 'FLOR', 'FLOW', 'FLUX', 'FOAL', 'FOAM', 'FOBS', 'FOES', 'FOGS', 'FOHN', 'FOHS', 'FOIN', 'FOLD', 'FOND', 'FONE', 'FONS', 'FOOD', 'FOOL', 'FOPS', 'FORA', 'FORB', 'FORD', 'FORT', 'FOUD', 'FOUL', 'FOUS', 'FOXY', 'FOYS', 'FRAP', 'FRAT', 'FRAU', 'FRET', 'FRIB', 'FRIG', 'FRIZ', 'FROW', 'FRUG', 'FUBS', 'FUCI', 'FUCK', 'FUDS', 'FUGU', 'FULL', 'FUME', 'FUMY', 'FUND', 'FURL', 'FURS', 'FUSS', 'FUTZ', 'FUZE', 'FUZZ', 'GABY', 'GADI', 'GAED', 'GAEN', 'GAFF', 'GAGA', 'GAGS', 'GAIR', 'GAIT', 'GALA', 'GAMS', 'GANE', 'GANS', 'GAPO', 'GAPY', 'GART', 'GASH', 'GATE', 'GATH', 'GATS', 'GAUD', 'GAVE', 'GAWP', 'GAYS', 'GAZE', 'GAZY', 'GEAN', 'GEAT', 'GECK', 'GEIT', 'GELD', 'GEMS', 'GENE', 'GENS', 'GENT', 'GENU', 'GERE', 'GERM', 'GERT', 'GETA', 'GETS', 'GHEE', 'GHIS', 'GIBS', 'GIDS', 'GIED', 'GIEN', 'GIGA', 'GILA', 'GILD', 'GILL', 'GIMP', 'GING', 'GINK', 'GIOS', 'GIRN', 'GISM', 'GIST', 'GJUS', 'GLAM', 'GLEG', 'GLEI', 'GLEN', 'GLEY', 'GLIB', 'GLID', 'GLIM', 'GLIT', 'GLOP', 'GLUE', 'GLUG', 'GLUM', 'GLUT', 'GNAR', 'GNAT', 'GNAW', 'GNOW', 'GOAD', 'GOBS', 'GOBY', 'GOFF', 'GOLD', 'GOLE', 'GOLF', 'GONE', 'GOOD', 'GOOK', 'GOON', 'GOOR', 'GORY', 'GOSH', 'GOSS', 'GOUT', 'GOVS', 'GRAB', 'GRAD', 'GRAT', 'GRAV', 'GREW', 'GRID', 'GRIG', 'GRIS', 'GRIT', 'GROG', 'GROW', 'GRUB', 'GRUE', 'GRUM', 'GUAN', 'GUAR', 'GUBS', 'GUDE', 'GUFF', 'GUGA', 'GUID', 'GULA', 'GULY', 'GUMP', 'GUNG', 'GUNK', 'GURN', 'GURS', 'GUSH', 'GUST', 'GUTS', 'GYMP', 'GYMS', 'GYPS', 'GYRE', 'HAAF', 'HAAR', 'HACK', 'HAIK', 'HAIL', 'HAIN', 'HALF', 'HALM', 'HALO', 'HALT', 'HAME', 'HAMS', 'HANG', 'HANK', 'HARD', 'HARM', 'HARO', 'HARP', 'HASH', 'HAST', 'HATS', 'HAUD', 'HAUL', 'HAUT', 'HAWK', 'HAWM', 'HAWS', 'HAZE', 'HEAD', 'HEAL', 'HEAP', 'HEAT', 'HECK', 'HEEL', 'HEFT', 'HEHS', 'HEIL', 'HELD', 'HELL', 'HELM', 'HELO', 'HELP', 'HEMP', 'HENT', 'HEPS', 'HERB', 'HERE', 'HERY', 'HEST', 'HETE', 'HETH', 'HEWS', 'HEYS', 'HIDE', 'HIGH', 'HIKE', 'HILA', 'HILD', 'HILL', 'HILT', 'HIND', 'HINS', 'HIPS', 'HIPT', 'HIST', 'HITS', 'HIZZ', 'HOAR', 'HOAX', 'HOBO', 'HOER', 'HOES', 'HOGG', 'HOHA', 'HOKE', 'HOKI', 'HOLD', 'HOLE', 'HOLP', 'HOLS', 'HOMS', 'HOMY', 'HOND', 'HONE', 'HONK', 'HONS', 'HOOD', 'HOOF', 'HOOT', 'HOPE', 'HORA', 'HORE', 'HOSE', 'HOTS', 'HOUR', 'HOVE', 'HOWE', 'HOYS', 'HUCK', 'HUFF', 'HUGE', 'HUGS', 'HUIA', 'HUIC', 'HUIS', 'HULL', 'HUMF', 'HUMP', 'HUNG', 'HUNK', 'HUNT', 'HUPS', 'HURL', 'HURT', 'HUSH', 'HUSO', 'HUSS', 'HWYL', 'HYES', 'HYKE', 'HYLA', 'HYLE', 'HYPE', 'HYPS', 'IAMB', 'ICER', 'ICES', 'ICHS', 'ICKY', 'IDEA', 'IDLY', 'IDYL', 'IGLU', 'ILEX', 'ILIA', 'ILKA', 'ILLY', 'IMID', 'IMPS', 'INCH', 'INKY', 'INNS', 'INRO', 'INTI', 'INTO', 'IOTA', 'IRED', 'IRES', 'IRON', 'ITCH', 'JABS', 'JADE', 'JAGA', 'JAGG', 'JAGS', 'JAIL', 'JAKE', 'JAMS', 'JANN', 'JAPE', 'JAPS', 'JASP', 'JASS', 'JASY', 'JAWS', 'JAZY', 'JEAN', 'JEED', 'JEEL', 'JEEP', 'JEEZ', 'JELL', 'JERK', 'JETS', 'JIBS', 'JILT', 'JINK', 'JINN', 'JINS', 'JISM', 'JOBE', 'JOCK', 'JOES', 'JOGS', 'JOIN', 'JOKY', 'JOLE', 'JOLL', 'JOLT', 'JONG', 'JORS', 'JOSS', 'JOTA', 'JOTS', 'JOUK', 'JOWS', 'JOYS', 'JUBE', 'JUCO', 'JUDY', 'JUGA', 'JUGS', 'JUMP', 'JURE', 'JURY', 'JUST', 'JUTS', 'JUVE', 'KAAL', 'KAED', 'KAES', 'KAFS', 'KAKI', 'KAKS', 'KAMA', 'KANA', 'KAON', 'KARA', 'KARN', 'KARO', 'KART', 'KATI', 'KATS', 'KAVA', 'KAWS', 'KAYO', 'KAYS', 'KAZI', 'KBAR', 'KECK', 'KEDS', 'KEEN', 'KEFS', 'KELL', 'KELT', 'KEMB', 'KEMP', 'KENS', 'KEPI', 'KEPS', 'KERB', 'KERF', 'KERN', 'KERO', 'KESH', 'KEST', 'KETA', 'KETO', 'KEWL', 'KEYS', 'KHAF', 'KHET', 'KHOR', 'KHUD', 'KIFF', 'KIKE', 'KILD', 'KILN', 'KILO', 'KILP', 'KILT', 'KIND', 'KING', 'KINO', 'KINS', 'KIPS', 'KISH', 'KIST', 'KIVA', 'KIWI', 'KLIK', 'KNAP', 'KNEE', 'KNEW', 'KNIT', 'KNOB', 'KNOP', 'KNOW', 'KOHL', 'KOJI', 'KOLO', 'KOND', 'KONK', 'KOOK', 'KORO', 'KORU', 'KOSS', 'KRIS', 'KUDU', 'KURU', 'LACK', 'LACY', 'LADY', 'LAER', 'LAGS', 'LAIK', 'LAIN', 'LAKY', 'LALL', 'LAMA', 'LAMS', 'LAND', 'LANE', 'LANK', 'LANX', 'LARD', 'LARI', 'LARN', 'LASH', 'LATH', 'LATI', 'LAVE', 'LAVS', 'LAWN', 'LAZE', 'LAZY', 'LEAD', 'LEAF', 'LEAK', 'LEAL', 'LEAM', 'LEAN', 'LEAS', 'LEAT', 'LECH', 'LEED', 'LEEK', 'LEEP', 'LEER', 'LEES', 'LEET', 'LEFT', 'LEKS', 'LEME', 'LEND', 'LENG', 'LENO', 'LENS', 'LENT', 'LEPS', 'LERE', 'LERP', 'LEVO', 'LEVY', 'LEYS', 'LIAS', 'LICE', 'LICH', 'LICK', 'LIDO', 'LIDS', 'LIED', 'LIEF', 'LIEN', 'LIEU', 'LIFT', 'LIKE', 'LILL', 'LILT', 'LIMB', 'LIME', 'LIMO', 'LIMP', 'LINE', 'LINK', 'LISP', 'LITE', 'LITH', 'LOAD', 'LOAF', 'LOAM', 'LOAN', 'LOBE', 'LOBS', 'LOCK', 'LODE', 'LODS', 'LOGE', 'LOGS', 'LOID', 'LOIN', 'LOIR', 'LOKE', 'LOME', 'LOOF', 'LOOR', 'LOOT', 'LOPE', 'LOPS', 'LORD', 'LORE', 'LORN', 'LOSE', 'LOSH', 'LOSS', 'LOTS', 'LOUD', 'LOUS', 'LOWN', 'LOWP', 'LOYS', 'LUAU', 'LUCE', 'LUCK', 'LUES', 'LUFF', 'LUGS', 'LUIT', 'LUKE', 'LULL', 'LULU', 'LUNA', 'LUNE', 'LUNG', 'LUNK', 'LUNY', 'LURE', 'LUSH', 'LUST', 'LUVS', 'LYES', 'LYME', 'LYNE', 'LYNX', 'LYSE', 'LYTE', 'MAAR', 'MABE', 'MACE', 'MACH', 'MADE', 'MADS', 'MAGE', 'MAGG', 'MAGS', 'MAID', 'MAIK', 'MAIL', 'MAIN', 'MAIR', 'MALA', 'MALI', 'MALL', 'MALM', 'MALS', 'MAMS', 'MAND', 'MANE', 'MANO', 'MANY', 'MARA', 'MARC', 'MARE', 'MARG', 'MARK', 'MARS', 'MART', 'MASE', 'MATT', 'MAUD', 'MAWK', 'MAWR', 'MAWS', 'MAXI', 'MAYO', 'MEAN', 'MECK', 'MEDS', 'MEET', 'MEFF', 'MEGS', 'MELA', 'MELD', 'MELL', 'MELS', 'MEND', 'MENG', 'MENT', 'MENU', 'MEOU', 'MEOW', 'MERE', 'MERI', 'MESA', 'MESE', 'MESS', 'META', 'METS', 'MEUS', 'MEWL', 'MEWS', 'MICE', 'MIFF', 'MIGG', 'MIGS', 'MIHI', 'MIKE', 'MILD', 'MILE', 'MILS', 'MIME', 'MINA', 'MINE', 'MINK', 'MINX', 'MIPS', 'MIRK', 'MIRO', 'MIRS', 'MISS', 'MIST', 'MITY', 'MIXT', 'MIXY', 'MIZZ', 'MOAN', 'MOAS', 'MOBY', 'MOCS', 'MODE', 'MODI', 'MODS', 'MOFO', 'MOGS', 'MOHR', 'MOIL', 'MOIT', 'MOJO', 'MOKO', 'MOLA', 'MOLD', 'MOLL', 'MOLT', 'MOME', 'MOMS', 'MOOS', 'MOOT', 'MOPE', 'MOPS', 'MORN', 'MORS', 'MORT', 'MOSH', 'MOSK', 'MOST', 'MOTE', 'MOTI', 'MOTS', 'MOTU', 'MOWA', 'MOWN', 'MOXA', 'MOZO', 'MOZZ', 'MUCK', 'MUDS', 'MUGG', 'MUGS', 'MUID', 'MUIL', 'MUIR', 'MULE', 'MUMM', 'MUMP', 'MUMS', 'MUMU', 'MUSS', 'MUST', 'MUTE', 'MUTT', 'NAAM', 'NAAN', 'NAGS', 'NAIF', 'NAMS', 'NANE', 'NANS', 'NAOI', 'NAPA', 'NAPE', 'NAPS', 'NARE', 'NARK', 'NARY', 'NATS', 'NAVE', 'NAYS', 'NEAL', 'NEAP', 'NEAR', 'NEAT', 'NECK', 'NEDS', 'NEED', 'NEFS', 'NEGS', 'NEKS', 'NEMN', 'NEPS', 'NERK', 'NESH', 'NETE', 'NETT', 'NEVE', 'NEVI', 'NEWT', 'NEXT', 'NIBS', 'NILL', 'NILS', 'NIMB', 'NINE', 'NIPA', 'NIRL', 'NITE', 'NITS', 'NIXE', 'NIXY', 'NOAH', 'NOBS', 'NODE', 'NODI', 'NODS', 'NOGG', 'NOIR', 'NOLE', 'NOLL', 'NOLO', 'NOME', 'NOMS', 'NONA', 'NONE', 'NOOK', 'NOON', 'NOPE', 'NORM', 'NOSE', 'NOSY', 'NOTA', 'NOTE', 'NOTT', 'NOUL', 'NOUN', 'NOUP', 'NOUS', 'NOUT', 'NOWS', 'NOWY', 'NOYS', 'NUKE', 'NULL', 'NYAS', 'NYED', 'OAKY', 'OARS', 'OAST', 'OATH', 'OATS', 'OBAS', 'OBEY', 'OBIS', 'OBOE', 'OBOL', 'OCHE', 'ODAH', 'ODAL', 'ODAS', 'ODDS', 'ODOR','OILS', 'OILY', 'OKAS', 'OKEH', 'OLDS', 'OLEO', 'OLES', 'OLID', 'OLMS', 'OLPE', 'OMBU', 'OMEN', 'OMER', 'OMOV', 'ONCE', 'ONES', 'ONOS', 'ONTO', 'ONUS', 'OOFY', 'OOHS', 'OOMS', 'OONS', 'OOPS', 'OOSE', 'OOSY', 'OOZE', 'OPAH', 'OPAL', 'OPEN', 'OPPO', 'OPUS', 'ORAD', 'ORAL', 'ORBY', 'ORCA', 'ORCS', 'ORES', 'ORGY', 'ORLE', 'ORRA', 'ORTS', 'OSAR', 'OTTO', 'OUDS', 'OULD', 'OUPH', 'OURN', 'OUZO', 'OVEL', 'OVEN', 'OWED', 'OWES', 'OWLS', 'OWRE', 'OWTS', 'OXER', 'OXES', 'OXIM', 'OYER', 'OYES', 'PACA', 'PACK', 'PACO', 'PACS', 'PACY', 'PADS', 'PAGE', 'PAHS', 'PAIK', 'PAIL', 'PAIR', 'PAIS', 'PALE', 'PALL', 'PALM', 'PALP', 'PAMS', 'PANG', 'PANS', 'PAPE', 'PAPS', 'PARA', 'PARD', 'PATE', 'PATU', 'PAUA', 'PAUL', 'PAWS', 'PAYS', 'PEAN', 'PEAR', 'PEAS', 'PEAT', 'PECH', 'PECK', 'PEEP', 'PEER', 'PEGH', 'PEGS', 'PEHS', 'PEKE', 'PELA', 'PELE', 'PELF', 'PELT', 'PENE', 'PENI', 'PEON', 'PEPO', 'PEPS', 'PERK', 'PERM', 'PERT', 'PEWS', 'PFUI', 'PHIZ', 'PHOS', 'PHOT', 'PHUT', 'PIAL', 'PIAS', 'PICA', 'PICS', 'PIED', 'PIER', 'PIET', 'PIGS', 'PIKA', 'PIKE', 'PIKI', 'PILA', 'PILI', 'PILL', 'PILY', 'PINA', 'PINE', 'PING', 'PINS', 'PIPA', 'PIPE', 'PIPI', 'PIPY', 'PIRL', 'PIRN', 'PIRS', 'PISS', 'PITS', 'PIUM', 'PIZE', 'PLAP', 'PLAY', 'PLEB', 'PLEW', 'PLEX', 'PLOD', 'PLOW', 'PLUE', 'PLUS', 'POAS', 'POCO', 'PODS', 'POEP', 'POET', 'POGO', 'POGY', 'POIS', 'POKE', 'POLK', 'POLL', 'POLT', 'POLY', 'POME', 'POND', 'PONG', 'PONK', 'PONS', 'POOF', 'POOK', 'POOL', 'POON', 'POOP', 'POOR', 'POOT', 'POPE', 'PORK', 'PORN', 'PORT', 'PORY', 'POST', 'POSY', 'POTT', 'POUK', 'POUR', 'POWN', 'POZZ', 'PRAD', 'PRAM', 'PRAU', 'PRAY', 'PREP', 'PREZ', 'PRIM', 'PROF', 'PROG', 'PROM', 'PROP', 'PROS', 'PROW', 'PRUH', 'PRYS', 'PTUI', 'PUBE', 'PUBS', 'PUCE', 'PUCK', 'PUDS', 'PUFF', 'PUGH', 'PUJA', 'PUKA', 'PUKU', 'PULE', 'PULK', 'PULL', 'PULU', 'PUMA', 'PUNG', 'PUNT', 'PUNY', 'PUPA', 'PUPU', 'PURR', 'PURS', 'PUSH', 'PUSS', 'PUTS', 'PUTZ', 'PYAT', 'PYES', 'PYIN', 'PYNE', 'PYOT', 'PYRO', 'QATS', 'QOPH', 'QUAD', 'QUID', 'QUIT', 'QUOP', 'RABI', 'RACE', 'RAFF', 'RAFT', 'RAGE', 'RAGG', 'RAGS', 'RAHS', 'RAIA', 'RAID', 'RAIN', 'RAJA', 'RAMI', 'RANK', 'RAPT', 'RASE', 'RASP', 'RAST', 'RATA', 'RATE', 'RATO', 'RATU', 'RAVE', 'RAYS', 'RAZZ', 'REAK', 'REAL', 'REAM', 'REAP', 'REAR', 'RECK', 'RECS', 'REDE', 'REDS', 'REED', 'REEF', 'REEL', 'REEN', 'REES', 'REFT', 'REGS', 'REKE', 'REMS', 'RENT', 'REPS', 'RETE', 'RHUS', 'RIAL', 'RIAS', 'RIBA', 'RIBS', 'RICH', 'RIEL', 'RIFE', 'RIFF', 'RIFT', 'RIGG', 'RIGS', 'RILE', 'RIMU', 'RIMY', 'RIND', 'RINE', 'RINS', 'RIPE', 'RIPS', 'RISE', 'RISK', 'RITT', 'ROAN', 'ROAR', 'ROBS', 'ROCS', 'RODS', 'ROED', 'ROIL', 'ROKE', 'ROKY', 'ROLL', 'ROMA', 'ROMP', 'RONE', 'RONG', 'ROOK', 'ROOM', 'ROOT', 'ROPE', 'RORT', 'ROST', 'ROSY', 'ROTI', 'ROTL', 'ROTO', 'ROTS', 'ROUL', 'ROVE', 'ROWS', 'RUBS', 'RUBY', 'RUDS', 'RUED', 'RUGA', 'RUGS', 'RUIN', 'RUKH', 'RULY', 'RUMP', 'RUMS', 'RUNE', 'RUNT', 'RUSK', 'RUST', 'RUTH', 'RUTS', 'RYFE', 'SABE', 'SABS', 'SACK', 'SADO', 'SAFT', 'SAGA', 'SAGE', 'SAGO', 'SAIL', 'SALL', 'SALP', 'SALS', 'SAME', 'SAMP', 'SANS', 'SARI', 'SASH', 'SATE', 'SAUT', 'SAVS', 'SAWN', 'SAYS', 'SCAG', 'SCAM', 'SCAR', 'SCAW', 'SCOG', 'SCOW', 'SCRY', 'SCUD', 'SEAM', 'SECS', 'SEEK', 'SEEN', 'SEER', 'SEES', 'SEGO', 'SEGS', 'SEIF', 'SEIL',  'SEND', 'SENE', 'SENS', 'SENT', 'SEPT', 'SERE', 'SERF', 'SESH', 'SETA', 'SETS', 'SEWS', 'SEXT', 'SEXY', 'SEYS', 'SHAD', 'SHAM', 'SHIM', 'SHOD', 'SHOO', 'SHOW', 'SHRI', 'SHUN', 'SHUT', 'SIBB', 'SICE', 'SIFT', 'SIGH', 'SIKA', 'SIKE', 'SILD', 'SILK', 'SILO', 'SIMA', 'SIMP', 'SIMS', 'SIND', 'SINH', 'SINS', 'SITH', 'SITZ', 'SIZY', 'SKAT', 'SKAW', 'SKIN', 'SKIO', 'SKIP', 'SKIS', 'SLAP', 'SLEE', 'SLEW', 'SLIM', 'SLOB', 'SLOT', 'SLUB', 'SLUM', 'SLUR', 'SLUT', 'SMUT', 'SNAP', 'SNIP', 'SNOB', 'SNOD', 'SNOG', 'SNOT', 'SNOW', 'SNUB', 'SNUG', 'SNYE', 'SOAP', 'SOAR', 'SOBA', 'SOBS', 'SOCA', 'SOCK', 'SOCS', 'SODA', 'SOFT', 'SOHS', 'SOLA', 'SOLO', 'SOLS', 'SOME', 'SOMY', 'SOOK', 'SOOL', 'SOOM', 'SOON', 'SOOP', 'SOOT', 'SOPS', 'SORB', 'SORI', 'SORT', 'SOUL', 'SOUR', 'SOWP', 'SOWS', 'SPEW', 'SPIC', 'SPIF', 'SPIM', 'SPIN', 'SPRY', 'SPUD', 'SPUE', 'SPUG', 'SPUN', 'SPUR', 'STAG', 'STAP', 'STEN', 'STEP', 'STEW', 'STIR', 'STOP', 'STOT', 'STUM', 'STUN', 'STYE', 'SUBA', 'SUBS', 'SUCH', 'SUDD', 'SUET', 'SUGH', 'SUIT', 'SUKH', 'SUMY', 'SUNK', 'SUPS', 'SUQS', 'SURA', 'SUSU', 'SWAB', 'SWAG', 'SWAM', 'SWAN', 'SWAT', 'SWAY', 'SWEY', 'SWIG', 'SWUM', 'SYKE', 'SYPE', 'TACH', 'TADS', 'TAES', 'TAGS', 'TAIG', 'TAIL', 'TAIN', 'TAIS', 'TAKE', 'TAKI', 'TAKS', 'TALA', 'TALK', 'TAME', 'TAMS', 'TANA', 'TANE', 'TANH', 'TANK', 'TANS', 'TAOS', 'TAPA', 'TAPE', 'TAPS', 'TAPU', 'TARE', 'TARN', 'TART', 'TASH', 'TATT', 'TAUT', 'TAVA', 'TAWS', 'TEAD', 'TEAK', 'TEAL', 'TEAT', 'TECH', 'TECS', 'TEDS', 'TEEL', 'TEEM', 'TEGU', 'TEIL', 'TELD', 'TEND', 'TENT', 'TEST', 'TETS', 'TEWS', 'THAN', 'THAW', 'THEM', 'THIR', 'THIS', 'THON', 'THOU', 'THRO', 'THRU', 'THUG', 'THUS', 'TIAR', 'TICE', 'TICK', 'TICS', 'TIDE', 'TIDY', 'TIED', 'TIES', 'TIFT', 'TIGS', 'TILE', 'TILT', 'TIME', 'TINT', 'TINY', 'TIPI', 'TIPS', 'TIPT', 'TOAD', 'TOBY', 'TOCK', 'TODS', 'TOEY', 'TOGA', 'TOGE', 'TOGS', 'TOKE', 'TOLE', 'TOLL', 'TOMO', 'TONK', 'TOOL', 'TOOM', 'TOON', 'TOPO', 'TOPS', 'TORE', 'TORI', 'TORN', 'TORS', 'TOSA', 'TOSE', 'TOST', 'TOTS', 'TOWN', 'TOWS', 'TOWT', 'TOWY', 'TOZE', 'TRAM', 'TRAY', 'TREK', 'TRES', 'TREW', 'TRIE', 'TRIN', 'TROP', 'TROT', 'TROY', 'TRUE', 'TRYP', 'TSAR', 'TUFF', 'TUFT', 'TULE', 'TUMP', 'TUNA', 'TUNG', 'TUNS', 'TURD', 'TURF', 'TURK', 'TURM', 'TURN', 'TUSH', 'TUTU', 'TWAE', 'TWAS', 'TWAY', 'TWEE', 'TWIN', 'TWIT', 'TWOS', 'TYED', 'TYER', 'TYES', 'TYGS', 'TYKE', 'TYPO', 'TYPP', 'TYPY', 'TYRO', 'TZAR', 'UDAL', 'UEYS', 'UGHS', 'UGLY', 'ULAN', 'ULEX', 'ULVA', 'UMPH', 'UMPS', 'UMPY', 'UNAI', 'UNAU', 'UNBE', 'UNDE', 'UNDO', 'UNDY', 'UPAS', 'UPDO', 'UPON', 'UPTA', 'URAO', 'URDY', 'UREA', 'URES', 'URGE', 'URIC', 'URNS', 'URSA', 'UTES', 'UTIS', 'UTUS', 'UVAE', 'UVEA', 'VACS', 'VAIL', 'VAIN', 'VALE', 'VARY', 'VEEP', 'VEER', 'VEES', 'VEGA', 'VEIL', 'VELL', 'VENT', 'VERY', 'VEST', 'VETS', 'VIAL', 'VIAS', 'VIBS', 'VIER', 'VIES', 'VIGA', 'VIGS', 'VILE', 'VILL', 'VINE', 'VINO', 'VINT', 'VIRL', 'VISE', 'VITE', 'VIVE', 'VOES', 'VOID', 'VOLA', 'VOLE', 'VOLT', 'VORS', 'VOTE', 'VOWS', 'WADS', 'WAGS', 'WALE', 'WALL', 'WALY', 'WAME', 'WAND', 'WANE', 'WANG', 'WANT', 'WAPS', 'WARB', 'WARE', 'WARS', 'WART', 'WAST', 'WATT', 'WAUK', 'WAUR', 'WAWS', 'WAXY', 'WAYS', 'WEAL', 'WEDS', 'WEED', 'WEEK', 'WEEL', 'WEER', 'WEID', 'WEIL', 'WEIR', 'WELD', 'WELK', 'WEND', 'WENS', 'WERE', 'WERO', 'WETA', 'WETS', 'WEXE', 'WEYS', 'WHAM', 'WHAT', 'WHEN', 'WHET', 'WHID', 'WHIM', 'WHIP', 'WHIT', 'WHIZ', 'WHOP', 'WHUP', 'WHYS', 'WICH', 'WICK', 'WIFE', 'WILE', 'WILL', 'WIND', 'WING', 'WINN', 'WINS', 'WIPE', 'WIRE', 'WISP', 'WISS', 'WIST', 'WITE', 'WITH', 'WOAD', 'WOFS', 'WOKS', 'WOMB', 'WONT', 'WOON', 'WOOS', 'WORE', 'WOST', 'WRAP', 'WUDS', 'WULL', 'WYES', 'WYND', 'WYNN', 'WYNS', 'WYTE', 'YAAR', 'YABA', 'YADS', 'YAFF', 'YALE', 'YAMS', 'YAPP', 'YAPS', 'YARD', 'YATE', 'YAUD', 'YAWP', 'YAWY', 'YAYS', 'YEAD', 'YEAS', 'YECH', 'YEED', 'YELD', 'YELM', 'YELP', 'YENS', 'YERD', 'YERK', 'YEST', 'YETI',  'YEUK', 'YIDS', 'YIKE', 'YILL', 'YINS', 'YIPE', 'YIPS', 'YLEM', 'YMPT', 'YOBS', 'YODE', 'YOGA', 'YOGH', 'YOGI', 'YOMP', 'YORE', 'YOUR', 'YOWL', 'YUPS', 'YUTZ', 'YUZU', 'ZEAL', 'ZERO', 'ZEST', 'ZHOS', 'ZIGS', 'ZILA', 'ZILL', 'ZIMB', 'ZINE', 'ZING', 'ZITI', 'ZITS', 'ZIZZ', 'ZOOM', 'ZOUK', 'ZYGA', 'ZYME','SOLD','COTS','POTS','DOGS','BANG','BEEN','GODS','RATS','BOAT','ACED','FONT','WOKE','WOVE','WOOF','NETS','NEST', 'BATS'
]

filename = "sowpods.txt"

mod_list = []
count = 1
for line in FileIO(filename):
    # strip ending whitespaces including newline char
    line = line.rstrip()
    # concatenate every two lines
    if count % 2 == 0:
        mod_list.append(line)
    else:
        old_line = line
    count += 1


dict = []
for word in mod_list:
    if len(word) == 4:
        dict.append(word.upper())
##this is a scrabble dictionary?

# print(dict)


filename2 = "words_alpha.txt"

mod_list2 = []
count2 = 1
for line in FileIO(filename2):
    # strip ending whitespaces including newline char
    line = line.rstrip()
    # concatenate every two lines
    if count % 2 == 0:
        mod_list2.append(line)
    else:
        old_line = line
    count += 1


dict2 = []
for word in mod_list2:
    if len(word) == 4:
        dict2.append(word.upper())
##this is a scrabble dictionary?

# print(dict)

bigdict = dict2
for word in dict:
    if word in bigdict:
        continue
    else:
        bigdict.append(word)



for word in sitedict:
    if word in bigdict:
        continue
    else:
        bigdict.append(word)



with open("dictionary.json") as ff:
    dictdata = json.load(ff)


biggestdict =[]
for key in dictdata:
    biggestdict.append(key.upper().encode('utf-8'))






finaldict = bigdict
for word in biggestdict:
    if len(word)==4:
        if word in finaldict:
            continue
        else:
            finaldict.append(word)
    else:
        continue

print(len(finaldict))
print(finaldict)

