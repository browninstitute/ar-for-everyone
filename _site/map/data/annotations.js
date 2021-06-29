const annotationData =
  [
    {
      "name": "brooks brothers group, inc",
      "count": "160",
      "type": "retail clothing store and corporate offices",
      "date": "8/26/2020",
      "position": "0.15439483023146697m 0.0036133989499034375m -0.0037336032457593897m",
      "normal": "0.007076019569784916m -1.0544090822018557e-10m 0.9999749646601399m",
      "category": "retail"
    },
    {
      "name": "nba store",
      "count": "117",
      "type": "retail store",
      "date": "9/29/2020",
      "position": "0.12230983327404536m 0.003593329214933043m 0.002559615547353789m",
      "normal": "0.002771605183343875m -4.130013560271077e-11m 0.9999961590949777m",
      "category": "retail"
    },
    {
      "name": "wolfgang's steakhouse",
      "count": "24",
      "type": "restaurant",
      "date": "4/17/2020",
      "position": "0.13988379816282157m 0.0032082835618771066m -0.0233791921835693m",
      "normal": "0.006804118939396193m -1.0138927309805443e-10m 0.9999768517148078m",
      "category": "restaurant"
    },
    {
      "name": "the century association (the club)",
      "count": "81",
      "type": "social club",
      "date": "3/31/2020",
      "position": "0.09715853200318836m 0.007695200384195126m 0.021578402377636304m",
      "normal": "-1.4901161193847655e-8m -0.9999999999999999m 0m",
      "category": "misc"
    },
    {
      "name": "princeton club of new york",
      "count": "108",
      "type": "membership club",
      "date": "9/29/2020",
      "position": "0.09308819450967849m 0.005403267768513083m 0.02264317111875686m",
      "normal": "-0.0059477536727870865m 8.86284362194998e-11m -0.9999823119566906m",
      "category": "misc"
    },
    {
      "name": "strip house - midtown",
      "count": "70",
      "type": "restaurant",
      "date": "4/13/2020",
      "position": "0.10104890852850797m 0.009687445672416348m -0.0034020228553942396m",
      "normal": "-0.003802251789567406m 5.665796681593963e-11m -0.9999927714145382m",
      "category": "restaurant"
    },
    {
      "name": "the penn club of new york",
      "count": "60",
      "type": "hotel",
      "date": "3/30/2020",
      "position": "0.07552488947109509m 0.010482864078275797m 0.0028071078178046m",
      "normal": "0.0058192230679619044m -8.671318095865703e-11m 0.9999830681780993m",
      "category": "hotel"
    },
    {
      "name": "harvard club of new york",
      "count": "275",
      "type": "hotel",
      "date": "3/18/2020",
      "position": "0.0779775440662187m 0.009364305606174066m -0.0033086110635887024m",
      "normal": "-0.004191275366600224m 6.245486984551286e-11m -0.9999912165668263m",
      "category": "hotel"
    },
    {
      "name": "iroquois hotel llc",
      "count": "50",
      "type": "hotel",
      "date": "3/18/2020",
      "position": "0.04653341844688667m 0.010320450078556191m -0.0027437356387929475m",
      "normal": "-0.003518540387480297m 5.24303374809071e-11m -0.9999938099176124m",
      "category": "hotel"
    },
    {
      "name": "the algonquin hotel times square, autograph collection",
      "count": "130",
      "type": "hotel",
      "date": "6/2/2020",
      "position": "ata-position=0.04653341844688667m 0.010320450078556191m -0.0027437356387929475m",
      "normal": "-0.003518540387480297m 5.24303374809071e-11m -0.9999938099176124m",
      "category": "hotel"
    },
    {
      "name": "butter",
      "count": "91",
      "type": "restaurant",
      "date": "3/15/2020",
      "position": "0.04449534043263444m 0.014439278619999343m -0.023323518893758367m",
      "normal": "0.0047724340844634205m -7.111480957960219e-11m 0.99998861187161m",
      "category": "restaurant"
    },
    {
      "name": "the sofitel new york - normandy llc",
      "count": "85",
      "type": "hotel",
      "date": "3/17/2020",
      "position": "0.054646618595183154m 0.014396668831998624m -0.021382886608344902m",
      "normal": "-0.225028521462677m 3.3531862715285568e-9m 0.9743521768479412m",
      "category": "hotel"
    },
    {
      "name": "morton's - new york",
      "count": "69",
      "type": "restaurant",
      "date": "4/8/2020",
      "position": "0.13398838920213552m 0.01138052317838055m -0.029540110509462775m",
      "normal": "-0.004225043909769013m 6.29580603505524e-11m -0.9999910744621476m",
      "category": "restaurant"
    },
    {
      "name": "wolfgang's steakhouse",
      "count": "24",
      "type": "restaurant",
      "date": "4/17/2020",
      "position": "0.1467850250855128m 0.005587903444763537m -0.04965662779852329m",
      "normal": "0.005275870538898325m -7.861659733799584e-11m 0.99998608249818m",
      "category": "restaurant"
    },
    {
      "name": "perry ellis international, inc.",
      "count": "77",
      "type": "designer, distribution and licensor of apparel",
      "date": "4/13/2020",
      "position": "0.0181913244380053m 0.008095945791002396m 0.013440445330507264m",
      "normal": "0.9999831807948754m -1.4900910568160942e-8m -0.00579983856357839m",
      "category": "retail"
    },
    {
      "name": "mrs. doubtfire at the stephen sondheim theatre",
      "count": "89",
      "type": "theatrical production",
      "date": "6/20/2020",
      "position": "-0.004314521735264952m 0.004443097514997031m 0.02939034814675117m",
      "normal": "-0.0021609251130279704m 3.220029343706325e-11m 0.9999976651986023m",
      "category": "theatre"
    },
    {
      "name": "burger & lobster bryant park llc",
      "count": "80",
      "type": "restaurant",
      "date": "3/16/2020",
      "position": "-0.02688334895552941m 0.005681824943434104m 0.029341701703735446m",
      "normal": "-0.0022703013461688125m 3.3830126317870804e-11m 0.999997422862578m",
      "category": "restaurant"
    },
    {
      "name": "nederlander productions, inc.",
      "count": "12",
      "type": "theatre company",
      "date": "4/6/2020",
      "position": "-0.08432305076337704m 0.028069087461489096m 0.012022811223580053m",
      "normal": "-1.4901161193847655e-8m -0.9999999999999999m 0m",
      "category": "theatre"
    },
    {
      "name": "v",
      "count": "85",
      "type": "theatre company",
      "date": "6/18/2020",
      "position": "-0.08466590695811331m 0.03196264854472777m 0.013407267201712068m",
      "normal": "0.9998524377306446m -1.4898962344685861e-8m -0.01717855535507316m",
      "category": "theatre"
    },
    {
      "name": "mean girls national tour llc (mean girls)",
      "count": "67",
      "type": "theatrical production",
      "date": "6/18/2020",
      "position": "-0.0933617868247264m 0.00453624549180804m 0.003389646102281083m",
      "normal": "-0.00493369214655218m 7.351774195659429e-11m -0.9999878292668382m",
      "category": "theatre"
    },
    {
      "name": "bubba gump shrimp",
      "count": "214",
      "type": "restaurant",
      "date": "4/8/2020",
      "position": "-0.08193315418811885m 0.002169650003769265m 0.01224733106513658m",
      "normal": "0.9999855061170813m -1.490094521816196e-8m -0.005384009264926521m",
      "category": "restaurant"
    },
    {
      "name": "guitar center inc.",
      "count": "154",
      "type": "musical instrument sales",
      "date": "4/8/2020",
      "position": "-0.12498077189963992m 0.001885570685309583m 0.003555046652724772m",
      "normal": "-0.005467523973774926m 8.147245606444666e-11m -0.9999850529790915m",
      "category": "retail"
    },
    {
      "name": "the ribbon worldwide 44 llc",
      "count": "159",
      "type": "theatre",
      "date": "4/17/2020",
      "position": "-0.10728323330147839m 0.008851397631779105m 0.004066390885046479m",
      "normal": "-0.005512824938440902m 8.214749304117116e-11m -0.999984804265144m",
      "category": "theatre"
    },
    {
      "name": "to kill a mockingbird at the shubert theatre",
      "count": "72",
      "type": "theatrical production",
      "date": "6/19/2020",
      "position": "-0.12177011481659655m 0.005408992072733709m -0.002502444512737929m",
      "normal": "0.004017430353733519m -5.986437728603957e-11m 0.9999919300941149m",
      "category": "theatre"
    },
    {
      "name": "jagged little pill llc at the broadhurst theatre",
      "count": "64",
      "type": "theatre",
      "date": "6/12/2020",
      "position": "-0.13175612048967553m 0.0022427037048784737m -0.002465556723656195m",
      "normal": "-0.004586746788203514m 6.834785324638357e-11m -0.9999894808216239m",
      "category": "theatre"
    },
    {
      "name": "ilili box-row nyc, llc",
      "count": "7",
      "type": "restaurant",
      "date": "3/18/2020",
      "position": "-0.1556536912905297m 0.012966775698821993m -0.0023739122426763167m",
      "normal": "-0.0033058923246327807m 4.926163441885681e-11m -0.9999945355230389m",
      "category": "restaurant"
    },
    {
      "name": "row nyc hotel",
      "count": "283",
      "type": "hotel",
      "date": "5/28/2020",
      "position": "ata-position=-0.16192646981420564m 0.01147651636430884m -0.01235963024188992m",
      "normal": "0.9999984266267349m -1.4901137748759015e-8m -0.001773906439171825m",
      "category": "hotel"
    },
    {
      "name": "sw hotels & resorts ww, llc dba the westin new york at times square",
      "count": "465",
      "type": "hotel",
      "date": "6/8/2020",
      "position": "-0.1563871509197712m 0.01395026547655421m 0.0296115846782987m",
      "normal": "-0.0012429156833611557m 1.8520886948125894e-11m -0.9999992275800037m",
      "category": "hotel"
    },
    {
      "name": "autumn smile, us tour, llc",
      "count": "73",
      "type": "theatrical production",
      "date": "6/17/2020",
      "position": "-0.15307756883006024m 0.0044570194712284725m 0.003592170976695048m",
      "normal": "0.004539096239635738m -6.763780474119988e-11m 0.9999896982496006m",
      "category": "theatre"
    },
    {
      "name": "hamilton at the richard rodgers theatre",
      "count": "134",
      "type": "theatrical production",
      "date": "6/18/2020",
      "position": "-0.12948007668808903m 0.0050805053981270165m -0.04849551175990389m",
      "normal": "0.0034206444704556987m -5.0971574641104024e-11m 0.9999941495785898m",
      "category": "theatre"
    },
    {
      "name": "new york marriott marquis",
      "count": "1265",
      "type": "hotel",
      "date": "6/1/2020",
      "position": "-0.09174894109151356m 0.015671067865812564m -0.038098267004955874m",
      "normal": "-1.4901161193847655e-8m -0.9999999999999999m 0m",
      "category": "hotel"
    },
    {
      "name": "planet hollywood",
      "count": "25",
      "type": "restaurant",
      "date": "4/10/2020",
      "position": "-0.07054394920981243m 0.005270601503977686m -0.03927569998129237m",
      "normal": "-1.4901161193847655e-8m -0.9999999999999999m 0m",
      "category": "restaurant"
    },
    {
      "name": "maximus, inc. (at u.s. census bureau)",
      "count": "221",
      "type": "outsourcing company",
      "date": "8/3/2020",
      "position": "-0.06252768954593706m 0.012540575074659562m -0.03113661690521522m",
      "normal": "-0.0018565211756411703m 2.7664321298020636e-11m -0.9999982766630774m",
      "category": "misc"
    },
    {
      "name": "the muse hotel",
      "count": "101",
      "type": "hotel",
      "date": "4/2/2020",
      "position": "-0.032232967816768106m 0.01754781009560743m -0.04559533559757834m",
      "normal": "-1.4901161193847655e-8m -0.9999999999999999m 0m",
      "category": "hotel"
    },
    {
      "name": "hyatt centric times square",
      "count": "221",
      "type": "hotel",
      "date": "6/10/2020",
      "position": "-0.03247600229385526m 0.029488200561229715m -0.031176960446452493m",
      "normal": "-0.02596323299722228m 3.868823200050336e-10m -0.9996628984474377m",
      "category": "hotel"
    },
    {
      "name": "comapny at the bernard b. jacobs theatre",
      "count": "61",
      "type": "theatrical production",
      "date": "6/18/2020",
      "position": "-0.13269947617616895m 0.005080226153238242m -0.04783880037568594m",
      "normal": "1.4901161193847655e-8m 0.9999999999999999m 0m",
      "category": "theatre"
    },
    {
      "name": "heartland brewery & chophouse, and hb burger",
      "count": "106",
      "type": "restaurant",
      "date": "12/30/2019",
      "position": "-0.01745706477231108m 0.00913244875989419m 0.017285479270252573m",
      "normal": "-1.4901161193847655e-8m -0.9999999999999999m 0m",
      "category": "restaurant"
    },
    {
      "name": "mela hotel",
      "count": "59",
      "type": "hotel",
      "date": "6/8/2020",
      "position": "-0.013493680144171637m 0.014554340653710432m 0.006353959602381759m",
      "normal": "1.4901161193847655e-8m 0.9999999999999999m 0m",
      "category": "hotel"
    },
    {
      "name": "virgil's real barbecue",
      "count": "143",
      "type": "restaurant",
      "date": "3/17/2020",
      "position": "-0.04111459630547969m 0.00824926737203465m 0.0040886628978801095m",
      "normal": "1.4901161193847656e-8m 1m 0m",
      "category": "restaurant"
    }
  ]
