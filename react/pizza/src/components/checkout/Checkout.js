import React, { useState } from "react";

import './Checkout.css';

import PizzaItem from "./../pizza-item";

const Checkout = ({ ingredients }) => {
    const [isCoupon, setIsCoupon] = useState(true);
    const [couponValue, setCouponValue] = useState('');

    return <div className="checkout">
        <div className="container-xxl">
            <h2 className="text-center">Ingredient info:</h2>
            <div className="row mt-4">
                {ingredients && ingredients.map((item, id) => {
                    return <PizzaItem key={id} image={item.image}>
                        <div className="text-center fw-bold">{item.name} : {item.count}</div>
                    </PizzaItem>
                })}
            </div>
        </div>
        <div className="container-xxl p-5">
            <div className="row justify-content-center">
                <div className="col-8">
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        alert('submitted');
                    }}>
                        <h2 className="text-center mb-4">Checkout info:</h2>
                        <div className="mb-3 row">
                            <label htmlFor="inputName" className="col-sm-1 col-form-label">Name:</label>
                            <div className="col-sm-11">
                                <input type="text" className="form-control" id="inputName" required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputEmail" className="col-sm-1 col-form-label">Email:</label>
                            <div className="col-sm-11">
                                <input type="email" className="form-control" id="inputEmail" required />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="selectDelivery" className="col-sm-3 col-form-label">Choose delivery methold: </label>
                            <div className="col-sm-9">
                                <select id="selectDelivery" className="form-select">
                                    <option>Delivery</option>
                                    <option>Local pickup</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="textarea" className="col-sm-2 col-form-label">Additional notes: </label>
                            <div className="col-sm-10">
                                <textarea className="form-control" id="textarea" rows="2"></textarea>
                            </div>
                        </div>
                        <div className="d-flex">
                            <p style={{ marginRight: "25px" }}>Are you a regular client?</p>
                            <div className="form-check form-check-inline">
                                <input required className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Yes</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input required className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">No</label>
                            </div>
                        </div>
                        <div className="mb-3 row align-items-center">
                            <label htmlFor="checkbox" className="col col-form-label">
                                Do you have a coupon code?
                                <input
                                    onChange={(e) => {
                                        setIsCoupon(!e.target.checked)
                                        setCouponValue('');
                                    }}
                                    style={{ marginLeft: "25px" }}
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkbox"
                                />
                            </label>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="coupon" className="col-sm-1 col-form-label">Coupon:</label>
                            <div className="col-sm-11">
                                <input
                                    required
                                    disabled={isCoupon}
                                    type="text"
                                    className="form-control"
                                    id="coupon"
                                    value={couponValue}
                                    onChange={(e) => setCouponValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button style={{ marginRight: "25px" }} type="reset" className="btn btn-dark">Reset</button>
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
}

export default Checkout;