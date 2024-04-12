const europeanCountries = [
  {
    id: 1,
    name: "Albania",
    image:
      "https://www.countryflags.com/wp-content/uploads/albania-flag-png-xl.png",
  },
  {
    id: 2,
    name: "Andorra",
    image:
      "https://www.countryflags.com/wp-content/uploads/andorra-flag-png-xl.png",
  },
  {
    id: 3,
    name: "Austria",
    image:
      "https://www.countryflags.com/wp-content/uploads/austria-flag-png-xl.png",
  },
  {
    id: 4,
    name: "Belarus",
    image:
      "https://www.countryflags.com/wp-content/uploads/belarus-flag-png-xl.png",
  },
  {
    id: 5,
    name: "Belgium",
    image:
      "https://www.countryflags.com/wp-content/uploads/belgium-flag-png-xl.png",
  },
  {
    id: 6,
    name: "Bosnia and Herzegovina",
    image:
      "https://www.countryflags.com/wp-content/uploads/bosnia-and-herzegovina-flag-png-xl.png",
  },
  {
    id: 7,
    name: "Bulgaria",
    image:
      "https://www.countryflags.com/wp-content/uploads/bulgaria-flag-png-xl.png",
  },
  {
    id: 8,
    name: "Croatia",
    image:
      "https://www.countryflags.com/wp-content/uploads/croatia-flag-png-xl.png",
  },
  {
    id: 9,
    name: "Cyprus",
    image:
      "https://www.countryflags.com/wp-content/uploads/cyprus-flag-png-xl.png",
  },
  {
    id: 10,
    name: "Czech Republic",
    image:
      "https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-xl.png",
  },
  {
    id: 11,
    name: "Denmark",
    image:
      "https://www.countryflags.com/wp-content/uploads/denmark-flag-png-xl.png",
  },
  {
    id: 12,
    name: "Estonia",
    image:
      "https://www.countryflags.com/wp-content/uploads/estonia-flag-png-xl.png",
  },
  {
    id: 13,
    name: "Finland",
    image:
      "https://www.countryflags.com/wp-content/uploads/finland-flag-png-xl.png",
  },
  {
    id: 14,
    name: "France",
    image:
      "https://www.countryflags.com/wp-content/uploads/france-flag-png-xl.png",
  },
  {
    id: 15,
    name: "Germany",
    image:
      "https://www.countryflags.com/wp-content/uploads/germany-flag-png-xl.png",
  },
  {
    id: 16,
    name: "Greece",
    image:
      "https://www.countryflags.com/wp-content/uploads/greece-flag-png-xl.png",
  },
  {
    id: 17,
    name: "Hungary",
    image:
      "https://www.countryflags.com/wp-content/uploads/hungary-flag-png-xl.png",
  },
  {
    id: 18,
    name: "Iceland",
    image:
      "https://www.countryflags.com/wp-content/uploads/iceland-flag-png-xl.png",
  },
  {
    id: 19,
    name: "Ireland",
    image:
      "https://www.countryflags.com/wp-content/uploads/ireland-flag-png-xl.png",
  },
  {
    id: 20,
    name: "Italy",
    image:
      "https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png",
  },
  {
    id: 21,
    name: "Kosovo",
    image:
      "https://www.countryflags.com/wp-content/uploads/kosovo-flag-png-xl.png",
  },
  {
    id: 22,
    name: "Latvia",
    image:
      "https://www.countryflags.com/wp-content/uploads/latvia-flag-png-xl.png",
  },
  {
    id: 23,
    name: "Liechtenstein",
    image:
      "https://www.countryflags.com/wp-content/uploads/liechtenstein-flag-png-xl.png",
  },
  {
    id: 24,
    name: "Lithuania",
    image:
      "https://www.countryflags.com/wp-content/uploads/lithuania-flag-png-xl.png",
  },
  {
    id: 25,
    name: "Luxembourg",
    image:
      "https://www.countryflags.com/wp-content/uploads/luxembourg-flag-png-xl.png",
  },
  {
    id: 26,
    name: "Malta",
    image:
      "https://www.countryflags.com/wp-content/uploads/malta-flag-png-xl.png",
  },
  {
    id: 27,
    name: "Moldova",
    image:
      "https://www.countryflags.com/wp-content/uploads/moldova-flag-png-xl.png",
  },
  {
    id: 28,
    name: "Monaco",
    image:
      "https://www.countryflags.com/wp-content/uploads/monaco-flag-png-xl.png",
  },
  {
    id: 29,
    name: "Montenegro",
    image:
      "https://www.countryflags.com/wp-content/uploads/montenegro-flag-png-xl.png",
  },
  {
    id: 30,
    name: "Netherlands",
    image:
      "https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-xl.png",
  },
  {
    id: 31,
    name: "North Macedonia",
    image:
      "https://www.countryflags.com/wp-content/uploads/north-macedonia-flag-png-xl.png",
  },
  {
    id: 32,
    name: "Norway",
    image:
      "https://www.countryflags.com/wp-content/uploads/norway-flag-png-xl.png",
  },
  {
    id: 33,
    name: "Poland",
    image:
      "https://www.countryflags.com/wp-content/uploads/poland-flag-png-xl.png",
  },
  {
    id: 34,
    name: "Portugal",
    image:
      "https://www.countryflags.com/wp-content/uploads/portugal-flag-png-xl.png",
  },
  {
    id: 35,
    name: "Romania",
    image:
      "https://www.countryflags.com/wp-content/uploads/romania-flag-png-xl.png",
  },
  {
    id: 36,
    name: "Russia",
    image:
      "https://www.countryflags.com/wp-content/uploads/russia-flag-png-xl.png",
  },
  {
    id: 37,
    name: "San Marino",
    image:
      "https://www.countryflags.com/wp-content/uploads/san-marino-flag-png-xl.png",
  },
  {
    id: 38,
    name: "Serbia",
    image:
      "https://www.countryflags.com/wp-content/uploads/serbia-flag-png-xl.png",
  },
  {
    id: 39,
    name: "Slovakia",
    image:
      "https://www.countryflags.com/wp-content/uploads/slovakia-flag-png-xl.png",
  },
  {
    id: 40,
    name: "Slovenia",
    image:
      "https://www.countryflags.com/wp-content/uploads/slovenia-flag-png-xl.png",
  },
  {
    id: 41,
    name: "Spain",
    image:
      "https://www.countryflags.com/wp-content/uploads/spain-flag-png-xl.png",
  },
  {
    id: 42,
    name: "Sweden",
    image:
      "https://www.countryflags.com/wp-content/uploads/sweden-flag-png-xl.png",
  },
  {
    id: 43,
    name: "Switzerland",
    image:
      "https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-xl.png",
  },
  {
    id: 44,
    name: "Turkey",
    image:
      "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-xl.png",
  },
  {
    id: 45,
    name: "Ukraine",
    image:
      "https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-xl.png",
  },
  {
    id: 46,
    name: "United Kingdom",
    image:
      "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-xl.png",
  },
  {
    id: 47,
    name: "Vatican City",
    image:
      "https://www.countryflags.com/wp-content/uploads/vatican-city-flag-png-xl.png",
  },
];

//-------------------------------------------------------------------------------------------------------------------

const asianCountries = [
  {
    id: 1,
    name: "Afghanistan",
    image:
      "https://www.countryflags.com/wp-content/uploads/afghanistan-flag-png-xl.png",
  },
  {
    id: 2,
    name: "Armenia",
    image:
      "https://www.countryflags.com/wp-content/uploads/armenia-flag-png-xl.png",
  },
  {
    id: 3,
    name: "Azerbaijan",
    image:
      "https://www.countryflags.com/wp-content/uploads/azerbaijan-flag-png-xl.png",
  },
  {
    id: 4,
    name: "Bahrain",
    image:
      "https://www.countryflags.com/wp-content/uploads/bahrain-flag-png-xl.png",
  },
  {
    id: 5,
    name: "Bangladesh",
    image:
      "https://www.countryflags.com/wp-content/uploads/bangladesh-flag-png-xl.png",
  },
  {
    id: 6,
    name: "Bhutan",
    image:
      "https://www.countryflags.com/wp-content/uploads/bhutan-flag-png-xl.png",
  },
  {
    id: 7,
    name: "Brunei",
    image:
      "https://www.countryflags.com/wp-content/uploads/brunei-flag-png-xl.png",
  },
  {
    id: 8,
    name: "Cambodia",
    image:
      "https://www.countryflags.com/wp-content/uploads/cambodia-flag-png-xl.png",
  },
  {
    id: 9,
    name: "China",
    image:
      "https://www.countryflags.com/wp-content/uploads/china-flag-png-xl.png",
  },
  {
    id: 10,
    name: "Cyprus",
    image:
      "https://www.countryflags.com/wp-content/uploads/cyprus-flag-png-xl.png",
  },
  {
    id: 11,
    name: "Georgia",
    image:
      "https://www.countryflags.com/wp-content/uploads/georgia-flag-png-xl.png",
  },
  {
    id: 12,
    name: "India",
    image:
      "https://www.countryflags.com/wp-content/uploads/india-flag-png-xl.png",
  },
  {
    id: 13,
    name: "Indonesia",
    image:
      "https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-xl.png",
  },
  {
    id: 14,
    name: "Iran",
    image:
      "https://www.countryflags.com/wp-content/uploads/iran-flag-png-xl.png",
  },
  {
    id: 15,
    name: "Iraq",
    image:
      "https://www.countryflags.com/wp-content/uploads/iraq-flag-png-xl.png",
  },
  {
    id: 17,
    name: "Japan",
    image:
      "https://www.countryflags.com/wp-content/uploads/japan-flag-png-xl.png",
  },
  {
    id: 18,
    name: "Jordan",
    image:
      "https://www.countryflags.com/wp-content/uploads/jordan-flag-png-xl.png",
  },
  {
    id: 19,
    name: "Kazakhstan",
    image:
      "https://www.countryflags.com/wp-content/uploads/kazakhstan-flag-png-xl.png",
  },
  {
    id: 20,
    name: "Kuwait",
    image:
      "https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-xl.png",
  },
  {
    id: 21,
    name: "Kyrgyzstan",
    image:
      "https://www.countryflags.com/wp-content/uploads/kyrgyzstan-flag-png-xl.png",
  },
  {
    id: 22,
    name: "Laos",
    image:
      "https://www.countryflags.com/wp-content/uploads/laos-flag-png-xl.png",
  },
  {
    id: 23,
    name: "Lebanon",
    image:
      "https://www.countryflags.com/wp-content/uploads/lebanon-flag-png-xl.png",
  },
  {
    id: 24,
    name: "Malaysia",
    image:
      "https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-xl.png",
  },
  {
    id: 25,
    name: "Maldives",
    image:
      "https://www.countryflags.com/wp-content/uploads/maldives-flag-png-xl.png",
  },
  {
    id: 26,
    name: "Mongolia",
    image:
      "https://www.countryflags.com/wp-content/uploads/mongolia-flag-png-xl.png",
  },
  {
    id: 27,
    name: "Myanmar",
    image:
      "https://www.countryflags.com/wp-content/uploads/myanmar-flag-png-xl.png",
  },
  {
    id: 28,
    name: "Nepal",
    image:
      "https://www.countryflags.com/wp-content/uploads/nepal-flag-png-xl.png",
  },
  {
    id: 29,
    name: "North Korea",
    image:
      "https://www.countryflags.com/wp-content/uploads/north-korea-flag-png-xl.png",
  },
  {
    id: 30,
    name: "Oman",
    image:
      "https://www.countryflags.com/wp-content/uploads/oman-flag-png-xl.png",
  },
  {
    id: 31,
    name: "Pakistan",
    image:
      "https://www.countryflags.com/wp-content/uploads/pakistan-flag-png-xl.png",
  },
  {
    id: 32,
    name: "Palestine",
    image:
      "https://www.countryflags.com/wp-content/uploads/palestine-flag-png-xl.png",
  },
  {
    id: 33,
    name: "Philippines",
    image:
      "https://www.countryflags.com/wp-content/uploads/philippines-flag-png-xl.png",
  },
  {
    id: 34,
    name: "Qatar",
    image:
      "https://www.countryflags.com/wp-content/uploads/qatar-flag-png-xl.png",
  },
  {
    id: 35,
    name: "Saudi Arabia",
    image:
      "https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-xl.png",
  },
  {
    id: 36,
    name: "Singapore",
    image:
      "https://www.countryflags.com/wp-content/uploads/singapore-flag-png-xl.png",
  },
  {
    id: 37,
    name: "South Korea",
    image:
      "https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-xl.png",
  },
  {
    id: 38,
    name: "Sri Lanka",
    image:
      "https://www.countryflags.com/wp-content/uploads/sri-lanka-flag-png-xl.png",
  },
  {
    id: 39,
    name: "Syria",
    image:
      "https://www.countryflags.com/wp-content/uploads/syria-flag-png-xl.png",
  },
  {
    id: 40,
    name: "Taiwan",
    image:
      "https://www.countryflags.com/wp-content/uploads/taiwan-flag-png-xl.png",
  },
  {
    id: 41,
    name: "Tajikistan",
    image:
      "https://www.countryflags.com/wp-content/uploads/tajikistan-flag-png-xl.png",
  },
  {
    id: 42,
    name: "Thailand",
    image:
      "https://www.countryflags.com/wp-content/uploads/thailand-flag-png-xl.png",
  },
  {
    id: 43,
    name: "Timor-Leste",
    image:
      "https://www.countryflags.com/wp-content/uploads/timor-leste-flag-png-xl.png",
  },
  {
    id: 44,
    name: "Turkey",
    image:
      "https://www.countryflags.com/wp-content/uploads/turkey-flag-png-xl.png",
  },
  {
    id: 45,
    name: "Turkmenistan",
    image:
      "https://www.countryflags.com/wp-content/uploads/turkmenistan-flag-png-xl.png",
  },
  {
    id: 46,
    name: "United Arab Emirates",
    image:
      "https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-xl.png",
  },
  {
    id: 47,
    name: "Uzbekistan",
    image:
      "https://www.countryflags.com/wp-content/uploads/uzbekistan-flag-png-xl.png",
  },
  {
    id: 48,
    name: "Vietnam",
    image:
      "https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-xl.png",
  },
  {
    id: 49,
    name: "Yemen",
    image:
      "https://www.countryflags.com/wp-content/uploads/yemen-flag-png-xl.png",
  },
];

//-------------------------------------------------------------------------------------------------------------------

const australianCountries = [
  {
    id: 1,
    name: "Australia",
    image:
      "https://www.countryflags.com/wp-content/uploads/australia-flag-png-xl.png",
  },
  {
    id: 2,
    name: "Fiji",
    image:
      "https://www.countryflags.com/wp-content/uploads/fiji-flag-png-xl.png",
  },
  {
    id: 3,
    name: "Kiribati",
    image:
      "https://www.countryflags.com/wp-content/uploads/kiribati-flag-png-xl.png",
  },
  {
    id: 4,
    name: "Marshall Islands",
    image:
      "https://www.countryflags.com/wp-content/uploads/marshall-islands-flag-png-xl.png",
  },
  {
    id: 5,
    name: "Micronesia",
    image:
      "https://www.countryflags.com/wp-content/uploads/micronesia-flag-png-xl.png",
  },
  {
    id: 6,
    name: "Nauru",
    image:
      "https://www.countryflags.com/wp-content/uploads/nauru-flag-png-xl.png",
  },
  {
    id: 7,
    name: "New Zealand",
    image:
      "https://www.countryflags.com/wp-content/uploads/new-zealand-flag-png-xl.png",
  },
  {
    id: 8,
    name: "Palau",
    image:
      "https://www.countryflags.com/wp-content/uploads/palau-flag-png-xl.png",
  },
  {
    id: 9,
    name: "Papua New Guinea",
    image:
      "https://www.countryflags.com/wp-content/uploads/papua-new-guinea-flag-png-xl.png",
  },
  {
    id: 10,
    name: "Samoa",
    image:
      "https://www.countryflags.com/wp-content/uploads/samoa-flag-png-xl.png",
  },
  {
    id: 11,
    name: "Solomon Islands",
    image:
      "https://www.countryflags.com/wp-content/uploads/solomon-islands-flag-png-xl.png",
  },
  {
    id: 12,
    name: "Tonga",
    image:
      "https://www.countryflags.com/wp-content/uploads/tonga-flag-png-xl.png",
  },
  {
    id: 13,
    name: "Tuvalu",
    image:
      "https://www.countryflags.com/wp-content/uploads/tuvalu-flag-png-xl.png",
  },
  {
    id: 14,
    name: "Vanuatu",
    image:
      "https://www.countryflags.com/wp-content/uploads/vanuatu-flag-png-xl.png",
  },
];

//-------------------------------------------------------------------------------------------------------------------

const americanCountries = [
  {
    id: 1,
    name: "Antigua and Barbuda",
    image:
      "https://www.countryflags.com/wp-content/uploads/antigua-and-barbuda-flag-png-xl.png",
  },
  {
    id: 2,
    name: "Argentina",
    image:
      "https://www.countryflags.com/wp-content/uploads/argentina-flag-png-xl.png",
  },
  {
    id: 3,
    name: "Bahamas",
    image:
      "https://www.countryflags.com/wp-content/uploads/bahamas-flag-png-xl.png",
  },
  {
    id: 4,
    name: "Barbados",
    image:
      "https://www.countryflags.com/wp-content/uploads/barbados-flag-png-xl.png",
  },
  {
    id: 5,
    name: "Belize",
    image:
      "https://www.countryflags.com/wp-content/uploads/belize-flag-png-xl.png",
  },
  {
    id: 6,
    name: "Bolivia",
    image:
      "https://www.countryflags.com/wp-content/uploads/bolivia-flag-png-xl.png",
  },
  {
    id: 7,
    name: "Brazil",
    image:
      "https://www.countryflags.com/wp-content/uploads/brazil-flag-png-xl.png",
  },
  {
    id: 8,
    name: "Canada",
    image:
      "https://www.countryflags.com/wp-content/uploads/canada-flag-png-xl.png",
  },
  {
    id: 9,
    name: "Chile",
    image:
      "https://www.countryflags.com/wp-content/uploads/chile-flag-png-xl.png",
  },
  {
    id: 10,
    name: "Colombia",
    image:
      "https://www.countryflags.com/wp-content/uploads/colombia-flag-png-xl.png",
  },
  {
    id: 11,
    name: "Costa Rica",
    image:
      "https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-xl.png",
  },
  {
    id: 12,
    name: "Cuba",
    image:
      "https://www.countryflags.com/wp-content/uploads/cuba-flag-png-xl.png",
  },
  {
    id: 13,
    name: "Dominica",
    image:
      "https://www.countryflags.com/wp-content/uploads/dominica-flag-png-xl.png",
  },
  {
    id: 14,
    name: "Dominican Republic",
    image:
      "https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-xl.png",
  },
  {
    id: 15,
    name: "Ecuador",
    image:
      "https://www.countryflags.com/wp-content/uploads/ecuador-flag-png-xl.png",
  },
  {
    id: 16,
    name: "El Salvador",
    image:
      "https://www.countryflags.com/wp-content/uploads/el-salvador-flag-png-xl.png",
  },
  {
    id: 17,
    name: "Grenada",
    image:
      "https://www.countryflags.com/wp-content/uploads/grenada-flag-png-xl.png",
  },
  {
    id: 18,
    name: "Guatemala",
    image:
      "https://www.countryflags.com/wp-content/uploads/guatemala-flag-png-xl.png",
  },
  {
    id: 19,
    name: "Guyana",
    image:
      "https://www.countryflags.com/wp-content/uploads/guyana-flag-png-xl.png",
  },
  {
    id: 20,
    name: "Haiti",
    image:
      "https://www.countryflags.com/wp-content/uploads/haiti-flag-png-xl.png",
  },
  {
    id: 21,
    name: "Honduras",
    image:
      "https://www.countryflags.com/wp-content/uploads/honduras-flag-png-xl.png",
  },
  {
    id: 22,
    name: "Jamaica",
    image:
      "https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-xl.png",
  },
  {
    id: 23,
    name: "Mexico",
    image:
      "https://www.countryflags.com/wp-content/uploads/mexico-flag-png-xl.png",
  },
  {
    id: 24,
    name: "Nicaragua",
    image:
      "https://www.countryflags.com/wp-content/uploads/nicaragua-flag-png-xl.png",
  },
  {
    id: 25,
    name: "Panama",
    image:
      "https://www.countryflags.com/wp-content/uploads/panama-flag-png-xl.png",
  },
  {
    id: 26,
    name: "Paraguay",
    image:
      "https://www.countryflags.com/wp-content/uploads/paraguay-flag-png-xl.png",
  },
  {
    id: 27,
    name: "Peru",
    image:
      "https://www.countryflags.com/wp-content/uploads/peru-flag-png-xl.png",
  },
  {
    id: 28,
    name: "Saint Kitts and Nevis",
    image:
      "https://www.countryflags.com/wp-content/uploads/saint-kitts-and-nevis-flag-png-xl.png",
  },
  {
    id: 29,
    name: "Saint Lucia",
    image:
      "https://www.countryflags.com/wp-content/uploads/saint-lucia-flag-png-xl.png",
  },
  {
    id: 30,
    name: "Saint Vincent and the Grenadines",
    image:
      "https://www.countryflags.com/wp-content/uploads/saint-vincent-and-the-grenadines-flag-png-xl.png",
  },
  {
    id: 31,
    name: "Suriname",
    image:
      "https://www.countryflags.com/wp-content/uploads/suriname-flag-png-xl.png",
  },
  {
    id: 32,
    name: "Trinidad and Tobago",
    image:
      "https://www.countryflags.com/wp-content/uploads/trinidad-and-tobago-flag-png-xl.png",
  },
  {
    id: 33,
    name: "United States of America",
    image:
      "https://www.countryflags.com/wp-content/uploads/united-states-flag-png-xl.png",
  },
  {
    id: 34,
    name: "Uruguay",
    image:
      "https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-xl.png",
  },
  {
    id: 35,
    name: "Venezuela",
    image:
      "https://www.countryflags.com/wp-content/uploads/venezuela-flag-png-xl.png",
  },
];
