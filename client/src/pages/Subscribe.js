import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation } from '@apollo/client';
import { UPDATE_SUBSCRIPTION } from '../utils/mutations';
import { };

const stripePromise = loadStripe('pk_test_51JSq1lLalsDifFnK704VjDcAMLpTtG4lgXMbrWSQmHdDixSum3EEmU54nSWPvmkjbCu2VbLtDuxTJoKq1wvz9ySX00YURY391S');

const Subscribe = () => {
    const [state, dispatch] = 
}

function Subscribe(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [updateSubscription] = useMutation(UPDATE_SUBSCRIPTION);



}
