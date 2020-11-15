import React from 'react';
import Card from "../../TransportSection/Card";

const OrdersProfile = ({userOrders}) => {
    return (
        <section className="section-card">
            <div className="container">

                <div className="card">
                    {userOrders.map(cargo => (
                        <Card cargo={cargo} key={cargo.id}/>
                    ))}
                </div>
                {/*Card */}

                <div className="card-next">
                    <a className="card-next-btn" href="/">Еще...</a>
                </div>

            </div>
            {/*Container*/}
        </section>
    );
};

export default OrdersProfile;