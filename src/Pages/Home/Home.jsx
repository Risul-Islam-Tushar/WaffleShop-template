import banner from "../../assets/Churro+Love.jfif";
import img1 from "../../assets/IMG_0443.jfif";
import img2 from "../../assets/IMG_0509.jfif";
import img3 from "../../assets/IMG_0546.jfif";
import img4 from "../../assets/IMG_0588.jfif";
import img5 from "../../assets/IMG_0685.jfif";
import logo from "../../assets/Logo+Heart+Wrap+Black.png";
const Home = () => {
  return (
    <div>
      <section>
        <div className="absolute text-center">
          <h1 className="text-2xl lg:text-7xl font-bold text-white">
            FALL IN LOVE WITH OUR
            <br />
            WAFFLE
          </h1>
        </div>
        <img src={banner} />
      </section>
      <section className="max-w-5xl mx-auto  flex flex-col lg:flex-row my-10">
        <div className="w-3/5 mx-auto">
          <h1 className="text-xl lg:text-3xl text-justify lg:text-start font-bold pb-10 uppercase">
            Located in the trendy new Sawmill Market, XO Waffle is Albuquerque’s
            first authentic Liège waffle eatery.
          </h1>
          <p className="text-base pb-2 text-center lg:text-start">
            We make authentic Belgium Liège Waffles. A Liège Waffle is a brioche
            dough based waffle infused with imported Belgium Pearl Sugar. We
            make our dough in-house to capture the freshest flavor possible.
          </p>
          <p className="text-base pb-2 text-center lg:text-start">
            We then use our top of the line heavy duty Belgium waffle irons.
            These waffle irons are CNC machined from a solid piece of iron which
            allows for even heat distribution to thoroughly cook the dough. The
            high heat melts the pearl sugar to create a caramelized coating that
            gives you a nice delicate crisp on the outside, and provide for a
            wondering crunch of sugar, while still holding the fluffiness of a
            brioche dough on the inside.
          </p>
          <p className="text-base pb-2 text-center lg:text-start">
            Unlike batter based waffles, the Liège Waffle is more of a pastry
            treat, where the pearl sugar coating acts as a preservative, and can
            be eaten plain as is traditionally seen in Belgium.
          </p>
          <p className="text-base pb-2 text-center lg:text-start">
            At XO Waffle, we add a delicious mixture of toppings with some of
            our original signature sauces and syrups, giving off a New Mexican
            twist to give you an experience you 'll fall in love.
          </p>
          <p className="text-base pb-2 text-center lg:text-start">
            Come, fall in love with our waffle!
          </p>
        </div>
        <div className="text-center mx-auto">
          <h1 className="text-left lg:pt-12 pb-3">LOCATION</h1>
          <p className="ps-3">
            1909 Bellamah Ave NW Ste S
            <br />
            in the Sawmill Market
            <br /> Albuquerque, NM 87104
          </p>
          <h1 className="text-left lg:pt-8 pb-3">HOURS</h1>
          <p className="font-semibold pb-2">Mon - Thur</p>
          <p className="font-semibold pb-2">8:30am - 8:00pm</p>
          <p className="font-semibold pb-2">Fri</p>
          <p className="font-semibold pb-2">8:30am - 9:00pm</p>
          <p className="font-semibold pb-2">Sat</p>
          <p className="font-semibold pb-2">8:00am - 9:00pm</p>
          <p className="font-semibold pb-2">Sun</p>
          <p className="font-semibold pb-2">8:00am - 8:00pm</p>
          <p className="text-sm pb-2">
            TO GO / PICK UP ORDERS CALL <br />
            (505) 318-8803{" "}
          </p>
        </div>
      </section>
      <section>
        <div className="carousel w-full lg:h-[760px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto">
        <div className="mt-4">
          <img className="h-32 mx-auto " src={logo} />
        </div>
        <div>
          <h1 className="text-center py-10">SAVORY</h1>
          <div className="flex gap-7 flex-col lg:flex-row">
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold">The Waffle of My Life</h1>
              <p>
                egg your way topped with ham, red or white XO sauce, topped with
                cheese, and green onions
              </p>
            </div>
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold">Koi No Yokan</h1>
              <p>
                egg your way, with red or white XO sauce, topped with cheese,
                and avocado slices
              </p>
            </div>
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold ">When Chicken Met Waffle</h1>
              <p>
                breaded chicken with your choice of XO sauce or spicy maple
                syrup, topped with green onions
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center py-10">SWEET</h1>
          <div className="flex gap-7 flex-col lg:flex-row">
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold">Peaches in the Air</h1>
              <p>
                egg your way topped with ham, red or white XO sauce, topped with
                cheese, and green onions
              </p>
            </div>
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold">Churro Love</h1>
              <p>
                egg your way, with red or white XO sauce, topped with cheese,
                and avocado slices
              </p>
            </div>
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold ">I'm Bananas for You</h1>
              <p>
                breaded chicken with your choice of XO sauce or spicy maple
                syrup, topped with green onions
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center py-10">TOPPINGS</h1>
          <div className="flex gap-7 flex-col lg:flex-row">
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold">Extravagant</h1>
              <p>
                egg your way topped with ham, red or white XO sauce, topped with
                cheese, and green onions
              </p>
            </div>
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold">Daring</h1>
              <p>
                egg your way, with red or white XO sauce, topped with cheese,
                and avocado slices
              </p>
            </div>
            <div className="ms-4 lg:ms-0">
              <h1 className="text-lg font-bold ">Brave</h1>
              <p>
                breaded chicken with your choice of XO sauce or spicy maple
                syrup, topped with green onions
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <img className="h-32 mx-auto " src={logo} />
        </div>
      </section>
    </div>
  );
};

export default Home;
