import React from "react";
import stacy from "../Assets/Stacy.jpg";
import nell from "../Assets/nell.jpg";
import akhirah from "../Assets/akhirah.jpg";
import ingredients from "../Assets/ingredients.jpg";
import drinksorg from "../Assets/drinksorg.jpg";
import thinking from "../Assets/thinking.jpg";
import "../Pages/About.css";

export default function About() {
  return (
    <>
      <h1 className="pageTitle, centerText ">Drink Sync</h1>
      <div className="aboutContainer">
        <div className="body">
          <div className="aboutDS">
            <h2 className="pageTitle mtop">About Drink Sync</h2>
            <p>
              Welcome to Drink Sync, where we help you save money on cocktails
              without having to sacrifice taste. We want to help you become a
              master mixologist in the comfort of your own home. We understand
              that enjoying quality cocktails doesn't have to break the bank,
              and we want to empower you with the knowledge and tools you need
              to create your favorite drinks affordably.
            </p>
          </div>

          <h2 className="pageTitle, offer">What We Offer</h2>

          <div className="bgColor ">
            <div className="ingredients">
              <img className="ingredientsImg" src={ingredients} alt="" />
              <div className="pSpacing">
                <h4 className="pageTitle ptitle">
                  Ingredient Based Cocktail Search
                </h4>
                <p className="ingredientsP">
                  We know how frustrating it can be to search for cocktail
                  recipes only to find out you're missing the most important
                  ingredient. Our search feature allows you to find cocktail
                  recipes based on the ingredients you have on hand. Simply
                  enter what's already in your cupboard, and we'll provide you
                  with a list of cocktails you can create today.
                </p>
              </div>
            </div>
          </div>

          <div className="ingredients">
            <div>
              <p>
                <h4 className="pageTitle ptitle">Search By Cocktail Name</h4>
                Want to find a specific cocktail you've enjoyed at your favorite
                bar or one you've heard your friends talking about? Use our
                search by cocktail name feature to find exactly what you're
                looking for. Whether it's a classic Old Fashioned or a latest
                trendy Martini, we've got you covered with detailed instructions
                to bring the favorites to your very own kitchen.
              </p>
            </div>
            <img className="ingredientsImg leftMar" src={drinksorg} alt="" />
          </div>
          <div className="bgColor spacing">
            <div className="ingredients">
              <img className="ingredientsImg " src={thinking} alt="" />
              <div className="pSpacing">
                <h4 className="pageTitle ptitle ">Missing an ingredient?</h4>
                <p className="ingredientsP">
                  Missing an ingredient or running low on an item, but don't
                  have the time or money to run to the store? We've got you
                  covered. Our ingredient substitute search will help you find
                  alternates so you don't have any interruptions, and can get
                  back to creating what you love. Discover how to swap out items
                  in your pantry and still enjoy wallet-friendly drinks.
                </p>
              </div>
            </div>
          </div>
          {/* <h3 className="pageTitle">Contact Us</h3>
    <p>
      Have questions, suggestions, or just want to connect? We'd love to
      hear from you! Please reach out to our team at theteam@drinksync.com.
    </p> */}
          <h2 className="pageTitle offer ">Cheers!</h2>
          <p className="spacing">
            Here's to you and your mixology adventure! At DrinkSync, we believe
            that the best cocktails are made with love and care, right in your
            own home. Join us on the journey to discover new drinks, sharpen
            your culinary skills, and save money while you're at it. Here's to
            you!{" "}
          </p>

          <h1 className="pageTitle offer ">Our Team</h1>
          <div className="team bgColor stacy">
            <div className="stacy">
              <div className="ingredients">
                <img className="stacyImg " src={stacy} alt="" />
                <div className="pSpacing">
                  <h4 className="pageTitle">Something about Stacy</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat harum possimus debitis nostrum enim mollitia fuga
                    alias adipisci ipsa aliquam dignissimos, repudiandae ut,
                    ipsum quod veritatis, culpa vitae eveniet ducimus.
                  </p>
                </div>
              </div>
            </div>
            <div className="nell">
              <div className="ingredients">
                <div>
                  <h4 className="pageTitle">Something about Nell</h4>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat harum possimus debitis nostrum enim mollitia fuga
                    alias adipisci ipsa aliquam dignissimos, repudiandae ut,
                    ipsum quod veritatis, culpa vitae eveniet ducimus.
                  </p>
                </div>
                <img className="nellImg bmar" src={nell} alt="" />
              </div>
            </div>
            <div className="akhirah">
              <div className="ingredients">
                <img className="akhirahImg" src={akhirah} alt="" />
                <div className="pSpacing">
                  <h4 className="pageTitle">Akhirah Strong</h4>
                  <p>
                    Akhirah Strong is a dynamic tech professional and a proud
                    graduate of the renowned Grand Circus Bootcamp. With a
                    passion for technology and a strong foundation in coding and
                    web development, Akhirah is poised to make a significant
                    impact in the ever-evolving tech industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
