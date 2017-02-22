
var blackjack = {


    deck: [
      [ "2 of Clubs",  2 ],
      [ "3 of Clubs",  3 ],
      [ "4 of Clubs",  4 ],
      [ "5 of Clubs",  5 ],
      [ "6 of Clubs",  6 ],
      [ "7 of Clubs",  7 ],
      [ "8 of Clubs",  8 ],
      [ "9 of Clubs",  9 ],
      [ "10 of Clubs",  10 ],
      [ "Jack of Clubs",  10 ],
      [ "Queen of Clubs",  10 ],
      [ "King of Clubs",  10 ],
      [ "Ace of Clubs",  11 ],
      [ "2 of Diamonds",  2 ],
      [ "3 of Diamonds",  3 ],
      [ "4 of Diamonds",  4 ],
      [ "5 of Diamonds",  5 ],
      [ "6 of Diamonds",  6 ],
      [ "7 of Diamonds",  7 ],
      [ "8 of Diamonds",  8 ],
      [ "9 of Diamonds",  9 ],
      [ "10 of Diamonds",  10 ],
      [ "Jack of Diamonds",  10 ],
      [ "Queen of Diamonds",  10 ],
      [ "King of Diamonds",  10 ],
      [ "Ace of Diamonds",  11 ],
      [ "2 of Spades",  2 ],
      [ "3 of Spades",  3 ],
      [ "4 of Spades",  4 ],
      [ "5 of Spades",  5 ],
      [ "6 of Spades",  6 ],
      [ "7 of Spades",  7 ],
      [ "8 of Spades",  8 ],
      [ "9 of Spades",  9 ],
      [ "10 of Spades",  10 ],
      [ "Jack of Spades",  10 ],
      [ "Queen of Spades",  10 ],
      [ "King of Spades",  10 ],
      [ "Ace of Spades",  11 ],
      [ "2 of Hearts",  2 ],
      [ "3 of Hearts",  3 ],
      [ "4 of Hearts",  4 ],
      [ "5 of Hearts",  5 ],
      [ "6 of Hearts",  6 ],
      [ "7 of Hearts",  7 ],
      [ "8 of Hearts",  8 ],
      [ "9 of Hearts",  9 ],
      [ "10 of Hearts",  10 ],
      [ "Jack of Hearts",  10 ],
      [ "Queen of Hearts",  10 ],
      [ "King of Hearts",  10 ],
      [ "Ace of Hearts",  11 ]
      ],

      player: {
        cards: [],
        points: []
      },

      dealer:{
        cards: [],
        points: []
      },

      toDealer: function() {

        var card;
        var randomIndex;

         card = Math.floor(Math.random() * this.deck.length);
         this.dealer.cards.push(this.deck[card][0]);
         this.dealer.points.push(this.deck[card][1]);
         randomIndex = this.deck.splice(card, 1);

       },

       toPlayer: function() {

         var card;
         var randomIndex;

         card = Math.floor(Math.random() * this.deck.length);
         this.player.cards.push(this.deck[card][0]);
         this.player.points.push(this.deck[card][1]);
         randomIndex = this.deck.splice(card, 1);

       },

       deal: function() {

           var counter;

           for (counter = 0; counter < 2; counter ++) {
             this.toDealer();
             this.toPlayer();
           }
         },

       playerScore: function(){

           var score = 0;

           for (var i = 0; i < this.player.points.length; i ++) {
               score = score + this.player.points[i];
               console.log(i);
               return score;
           }


       },

       dealerScore: function(){

         var points = this.dealer.points;

         var sum = points.reduce(add, 0);

         function add(a, b) {
           return a + b;

         }
       },










}
