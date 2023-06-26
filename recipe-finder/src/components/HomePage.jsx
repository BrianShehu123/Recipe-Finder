const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Welcome to Recipe Finder</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            At Recipe Finder, we are passionate about providing you with the
            most delicious and mouth-watering food options. Our experienced
            chefs work tirelessly to create unique and flavorful recipes that
            will satisfy your cravings.
          </p>
        </section>
        <section>
          <h2>Featured Recipes</h2>
          <div className="recipe-card">
            <img src="https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-threeByTwoMediumAt2X-v2.jpg" alt="Recipe" />
            <h3>Delicious Pasta Carbonara</h3>
            <p>
              Indulge in the creamy and savory flavors of our classic Pasta
              Carbonara. Made with fresh ingredients and love, this recipe is
              sure to become your favorite comfort food.
            </p>
            <a href="/recipes/pasta-carbonara">View Recipe</a>
          </div>
          <div className="recipe-card">
            <img src="https://sugarspunrun.com/wp-content/uploads/2022/12/Beef-Stew-recipe-1-of-1.jpg" alt="Recipe" />
            <h3>Hearty Beef Stew</h3>
            <p>
              Warm up with a bowl of our hearty Beef Stew. Packed with tender
              beef, vegetables, and rich flavors, this stew is perfect for
              chilly evenings.
            </p>
            <a href="/recipes/beef-stew">View Recipe</a>
          </div>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            Have any questions or feedback? We would love to hear from you! Reach
            out to our friendly customer support team at{' '}
            <a href="mailto:brian.shehu2@gmail.com">brian.shehu2@gmail.com</a>.
          </p>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default HomePage;
