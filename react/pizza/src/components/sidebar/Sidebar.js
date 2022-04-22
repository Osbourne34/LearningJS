import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import './Sidebar.css';

import IngredientItem from './../ingredient-item';
import Modal from "../modal";

function Sidebar(props) {
    const [ingredients, setIngredients] = useState(props.ingredients);
    const [totalPrice, setTotalPrice] = useState(props.basePrice);
    const [savedPizza, setSavedPizza] = useState();
    const [isDisabledSaveBtn, setIsDisabledSaveBtn] = useState(true);
    const [isDisabledLoadBtn, setIsDisabledLoadBtn] = useState(true);
    const [isDisabledCheckoutBtn, setIsDisabledCheckoutBtn] = useState(true);
    const [modalLoadActive, setModalLoadActive] = useState(false);
    const [modalCheckoutActive, setModalCheckoutActive] = useState(false);
    const [code, setCode] = useState('');

    const onCountPlus = (item) => {
        const { id } = item;
        const newArr = ingredients.map(item => {
            if (item.id === id) {
                item.count += 1;
            }
            return item;
        })
        setIngredients([...newArr]);
        setIsDisabledSaveBtn(false);
        setIsDisabledCheckoutBtn(false);
        props.onAdd(item);
    }

    const onCountMinus = (item) => {
        const { id } = item;
        const newArr = ingredients.map(item => {
            if (item.id === id) {
                item.count -= 1;
            }
            return item;
        })
        setIngredients([...newArr]);
        setIsDisabledSaveBtn(!ingredients.find(item => item.count > 0))
        setIsDisabledCheckoutBtn(!ingredients.find(item => item.count > 0))
        props.onRemove(item);
    }

    const onReset = () => {
        if (ingredients.find(item => item.count > 0)) {
            setIngredients((prev) => {
                return prev.map(item => {
                    item.count = 0;
                    return item;
                })
            })
            setIsDisabledSaveBtn(true)
            setIsDisabledCheckoutBtn(true);
            props.onReset();
        }
    }

    useEffect(() => {
        setTotalPrice(() => {
            const ingredientsTotal = ingredients.map(item => {
                return item.price * item.count;
            }).reduce((start, prev) => {
                return start + prev;
            }) + props.basePrice;

            return ingredientsTotal;
        })
    }, [ingredients])

    useEffect(() => {
        localStorage.setItem('savedPizza', null);
        props.onReset();
        setIngredients((prev) => {
            return prev.map(item => {
                item.count = 0;
                return item;
            })
        });
        setTotalPrice(props.basePrice);
    }, [])

    const onSave = () => {
        const randomNum = () => {
            let res = '';
            for (let i = 0; i < 10; i++) {
                res += String(Math.floor(Math.random() * 10))
            }
            return res;
        }
        const pizza = {
            ingredients: ingredients,
            code: randomNum()
        }
        setSavedPizza(pizza);
        localStorage.setItem('savedPizza', JSON.stringify(pizza))
        setIsDisabledLoadBtn(false);
    }

    const onLoad = () => {
        setModalLoadActive(true);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();

        if (JSON.parse(localStorage.getItem('savedPizza')).code === code) {
            setIngredients(JSON.parse(localStorage.getItem('savedPizza')).ingredients);
            props.onLoad(JSON.parse(localStorage.getItem('savedPizza')).ingredients);
            setModalLoadActive(false);
            setIsDisabledCheckoutBtn(false);
            setCode('')
        } else {
            alert('You entered an invalid number');
        }
    }

    const onCheckout = () => {
        setModalCheckoutActive(true);
    }

    return (
        <aside className="sidebar col-3">

            <div className="sidebar__head d-flex align-items-center justify-content-between">
                <h3>Your pizza</h3>
                <div className="sidebar__head-price badge rounded-pill bg-secondary">{totalPrice}$</div>
                <button onClick={onReset} className="btn btn-warning">Reset</button>
            </div>

            <div className="sidebar__ingredients border rounded-top">
                {ingredients.map(item => {
                    return <IngredientItem
                        key={item.id}
                        onCountPlus={() => onCountPlus(item)}
                        onCountMinus={() => onCountMinus(item)}
                        {...item} />
                })}
            </div>

            <div className="sidebar__buttons d-flex justify-content-between p-3 border border-top-0 border-bottom-0">
                <button
                    disabled={isDisabledSaveBtn}
                    onClick={onSave}
                    className="btn btn-success">Save Pizza</button>
                <button
                    disabled={isDisabledLoadBtn}
                    onClick={onLoad}
                    className="btn btn-dark">Load Pizza</button>

            </div>
            <div className="sidebar__buttons p-3 border rounded-bottom">
                <button
                    disabled={isDisabledCheckoutBtn}
                    onClick={onCheckout}
                    className="btn btn-primary">Checkout</button>
            </div>

            {
                savedPizza && <div className="text-success">
                    Your pizza configuration has ben saved. Your number is: {savedPizza.code}
                </div>
            }

            <Modal active={modalLoadActive} setActive={setModalLoadActive}>
                <form onSubmit={onSubmitForm} >
                    <h5>Load a pizza using a configuration number:</h5>
                    <div className="d-flex">
                        <input value={code} onChange={(e) => setCode(e.target.value)} className="form-control" type="text" />
                        <button className="btn btn-primary">Load</button>
                    </div>
                </form>
            </Modal>

            <Modal active={modalCheckoutActive} setActive={setModalCheckoutActive}>
                <h2 className="text-center mb-4">Your Order</h2>
                <p className="text-center">The pizza has the following ingredients</p>
                <ul className="text-center">
                    {
                        ingredients.filter(item => {
                            if (item.count > 0) {
                                return true;
                            }
                        }).map(item => {
                            return <li key={item.id}>{item.name} : {item.count}</li>
                        })
                    }
                </ul>
                <h2 className="text-center">Total Price: {totalPrice}$</h2>
                <p className="text-center">Contrinue to checkout?</p>
                <div className="d-flex justify-content-between">
                    <button onClick={() => setModalCheckoutActive(false)} className="btn btn-primary">Cancel</button>
                    <NavLink to="checkout" className="btn btn-success">Continue</NavLink>
                </div>
            </Modal>

        </aside>
    )
}

export default Sidebar;