// PROPER NOUNS SECTION [^a-zA-Z\s.:?!'-]+
let proper = `Congratulations!, Dear, Hello, Help!, How are you?, I hope all is well, I really appreciate, I'm sorry, I’m sorry to hear that., Sincerely Yours,, Thank You!, That sounds great!, To Whom It May Concern:, What do you think?, Wishing you the best!, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, January, February, March, April, May, June, July, August, September, October, November, December`

// /[^a-zA-Z'-]+/gi
let wordsToSplit = `
able about above afraid after again against agree allow alone also always am among and anger animal answer appear apple are area arrange arrive actually another back bank basic been before began begin behind being believe best better between black blue body bone book born both bottom bought branch bread break bright bring broke brother brought brown build busy because become call came can't carefully carry caught cause center certainly chair chance change check child children choose city class clean clear clock close cloud coast coat cold color come commonly company compare completely consider contain continue control cook cool copy corner correctly cost could count country cover create cross crowd current cat dance danger dark deal dear decide deep degree depend describe design determine develop different difficult direct discuss distant divide doctor does dollar don't done door double down draw dream dress drink drive drop during day dad didn't dog each early earth ease east edge effect eight either electric else enemy energy engine enough equal especially even evening event ever every exact example except excite exercise expect experience experiment e-mail easy eat effort explain eye face fact fair fall family famous farm fast father favor fear feed feel feet fell felt field fight figure fill final find fine finger finish fire first five flat floor flow flower follow food foot force forest form forward found four free fresh friendly from front fruit full false game garden gather gave general gentle girl give glad glass gold gone good government grand grass gray great green grew ground group grow guess guide get guy hair half hand happen happy hard have head hear heard heart heat heavy held help here high hill history hold hole home hope hour house how huge hundred hunt hurry her heat him his hot idea imagine inch include indicate industry insect instant instrument interest invent iron island join jump just keep kept kind knew know if ignore immediately important improve independent into isn't job journal joy kiss lake land language large last late laugh lead learn least leave left length less letter level life lift light like lose line liquid list listen little live locate lone long look lost loud love lately machine made magnet main major make many mark market mass master match material matter mean meant measure meat meet melody men metal method middle might mile milk million mind mine minute miss modern moment money mom month moon more morning most mother motion mountain mouth move much multiply music must my myself name nation natural nature near necessary neck need neighbor never next night nine noise noon north nose note nothing notice noun number new no now object observe occur ocean offer office often once only open operate opposite order original other over off old one orange our page paint pair paper parent part particular party pass past path pattern people perhaps period person phrase pick picture piece place plain plan plane planet plant play please plural poem point position possible pound power practice prepare present press pretty print probably problem process produce product proper property protect prove provide pull push pink purple quart question quickly quietly quite race radio rain raise range rather reach read ready real reason receive record region remember repeat reply represent require rest result rich ride right ring rise river road rock roll room root rope rose round rule quality quit red said same scale school science score search season second section select sense sentence separate serve settle seven several shall shape share sharp sheet shell shine shore short should shoulder shout show sight silent silver similar simple since single sister six skill sleep small smell smile snow soft solution some something soon sound south space speak special speech speed spell spend spread spring square stand star start state station stay stick still stood stop store story straight strange street stretch strong student study subject subtract success sudden suggest suit summer sun supply support sure surface surprise symbol system table tail take talk tall teach team teeth tell temperature test than thank that the their them then there these they thick thin thing think third this those though thought thousand three through throw time tiny tire today together told took tool total touch toward town track trade train travel tree triangle trip trouble truck turn twenty type tomorrow ten two under unit until usual value vary very view village visit voice upon use vacation various video virtually visible visual vote ultimately understand unfortunately wait walk wall want warm wash watch water wave wear weather week weight well went were west what wheel when where whether which while white who whole whose why wide wife wild will wind window wing winter wire wish with woman women won't wonder wood word work world would write written wrong wrote wait without yard year yellow young your zero zone yes yell yesterday yourself
`