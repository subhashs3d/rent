

          var substringMatcher = function(strs) {
          return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function(i, str) {
              if (substrRegex.test(str)) {
                matches.push(str);
              }
            });

            cb(matches);
          };
        };

        var states = ['Auckland Airport', 'Auckland City', 'Auckland-NorthShore', 'Christchurch Airport', 'Dunedin Airport',
          'Hamilton Downtown', 'Nelson Airport', 'New Plymouth Airport', 'Palmerston North Airport', 'Queenstown Airport', 'Rotorua Downtown',
          'Tauranga Downtown', 'Wellington Airport', 'Napier-Hastings', 'Palmerston North', 'Nelson', 'Rotorua', 'Whangarei',
          'Invercargill', 'Whanganui', 'Gisborne', 'Upper Hutt', 'East Coast Bays',
          'Takapuna', 'Birkenhead', 'Mt Albert', 'Papakura', 'Tamaki', 'Tauranga',
          'Lower Hutt', 'Porirua'];

        $('.typeahead').typeahead({
          hint: true,
          highlight: true,
          minLength: 1
        },
        {
          name: 'states',
          source: substringMatcher(states)
        });
