import React from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, ElementsConsumer } from '@stripe/react-stripe-js';

// Trying to develop Stripe Checkout Page utilizing class components. Code also utilizes Stripe's Elements components for page display
class CheckoutForm extends React.Component {
    handleSubmit = async (event) => {
        event.preventDefault();
        const { stripe, elements } = this.props;

        if (elements == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });
    };

    render() {
        const { stripe } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <CardElement />
                <button type="submit" disabled={!stripe}>
                    Subscribe Today!
                </button>
            </form>
        );
    }
}

const InjectedCheckoutForm = () => (
    <ElementsConsumer>
        {({ stripe, elements }) => (
            <CheckoutForm stripe={stripe} elements={elements} />
        )}
    </ElementsConsumer>
);

const stripePromise = loadStripe('pk_test_51JSq1lLalsDifFnK704VjDcAMLpTtG4lgXMbrWSQmHdDixSum3EEmU54nSWPvmkjbCu2VbLtDuxTJoKq1wvz9ySX00YURY391S');

const App = () => (
    <Elements stripe={stripePromise}>
        <InjectedCheckoutForm />
    </Elements>
);

ReactDOM.render(<App />, document.body);




