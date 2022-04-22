import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';

import './App.css';

import pizzaImg from "./../../assets/images/pizza.jpg";

import Layout from './../layout';
import Main from './../main';
import Sidebar from "../sidebar";
import Pizza from "../pizza";
import Checkout from "../checkout/Checkout";

import { ingredients } from './../../assets/ingredients/ingredients';

function App() {
    const [pizza, setPizza] = useState({
        basePizza: {
            image: pizzaImg,
            price: 3
        },
        ingredients: []
    });

    const onAddIngredient = (item) => {
        if (item.count <= 1) {
            setPizza({
                ...pizza,
                ingredients: [...pizza.ingredients, item]
            })
        }
    }

    const onRemoveIngredient = ({ id, count }) => {
        if (count < 1) {
            const newArr = pizza.ingredients.filter(item => {
                if (item.id !== id) {
                    return true;
                }
            })
            setPizza({
                ...pizza,
                ingredients: newArr
            })
        }
    }

    const onReset = () => {
        setPizza({
            ...pizza,
            ingredients: []
        })
    }

    const onLoad = (savePizza) => {
        const newArr = savePizza.filter(item => {
            if (item.count > 0) {
                return true;
            }
        })
        setPizza({
            ...pizza,
            ingredients: newArr
        })
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route
                    index
                    element={
                        <Main
                            pizza={
                                <Pizza
                                    pizza={pizza}
                                />}
                            sidebar={
                                <Sidebar
                                    ingredients={ingredients}
                                    basePrice={pizza.basePizza.price}
                                    onAdd={onAddIngredient}
                                    onRemove={onRemoveIngredient}
                                    onReset={onReset}
                                    onLoad={onLoad}
                                />
                            }
                        />
                    }
                />
                <Route
                    path="checkout"
                    element={<Checkout ingredients={pizza.ingredients} />}
                />

                <Route path="ingredients" element={<div style={{marginTop:"64px"}}>ingredients</div>} />

            </Route>
        </Routes>
    )
}

export default App;