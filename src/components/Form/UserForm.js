import classes from './UserForm.module.scss';
import Input from '../Input/Input';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { basicSchema } from '../../schemas/schema';
import { useDispatch, useSelector } from 'react-redux';
import { addUsers, editUsers } from '../../store/thunks/usersThunk';
import Textarea from '../Textarea/Textarea';
import Modal from '../Modal/Modal';
import { uiActions } from '../../store/reducers/uiReducer';

const UserForm = ({ user }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const formMessage = useSelector((state) => state.ui.formMessage);
    const modalOpen = useSelector((state) => state.ui.showModal);

    //Timestamp used for sorting because of redux toolkit limitations
    const timestamp = Date.now();
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.toLocaleTimeString();
    let currentDate = `${day}. ${month}. ${year}. at ${time}`;

    const cancelBtnHandler = (e) => {
        e.preventDefault();
        dispatch(uiActions.openModal());
    };

    const handlePopupClose = () => {
        dispatch(uiActions.closeModal());
    };

    const onSubmit = (values) => {
        //Add new users on submit
        if (!user) {
            dispatch(
                addUsers({
                    name: values.name,
                    website: values.website,
                    email: values.email,
                    phone: values.phone,
                    notes: values.notes,
                    timestamp: timestamp,
                    date: currentDate,
                })
            );
            navigate('/');
        }

        //Edit specific user
        if (user) {
            dispatch(
                editUsers(user.id, {
                    name: values.name,
                    website: values.website,
                    id: user.id,
                    email: values.email,
                    phone: values.phone,
                    notes: values.notes,
                })
            );
        }
    };

    return (
        <>
            <Modal
                openModal={modalOpen}
                closeModal={handlePopupClose}
                modalText="Are you sure you want to cancel? All unsaved changes will be
                    lost!"
                confirmBtnAction={() => {
                    dispatch(uiActions.closeModal());
                    navigate('/');
                }}
            />

            <Formik
                initialValues={
                    user
                        ? {
                              name: user.name,
                              email: user.email,
                              phone: user.phone,
                              website: user.web,
                              notes: user.notes,
                          }
                        : {
                              name: '',
                              email: '',
                              phone: '',
                              website: '',
                              notes: '',
                          }
                }
                validationSchema={basicSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form className={classes.form}>
                        <Input id="name" name="name" label="Name" type="text" />
                        <Input
                            id="email"
                            name="email"
                            label="Email"
                            type="email"
                        />
                        <Input
                            id="phone"
                            name="phone"
                            label="Phone"
                            type="phone"
                        />
                        <Input
                            id="website"
                            name="website"
                            label="Website"
                            type="text"
                        />
                        <Textarea label="Additional notes" name="notes" />

                        <div className={classes['form__controls']}>
                            <div className={classes['form__message']}>
                                <p
                                    className={`${
                                        formMessage
                                            ? classes['form__success-msg--show']
                                            : classes['form__success-msg--hide']
                                    } form__success-msg`}
                                >
                                    User successfully edited!
                                </p>
                            </div>

                            <div className={classes['form__actions']}>
                                <button
                                    className="btn btn--secondary"
                                    onClick={cancelBtnHandler}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn btn--primary"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default UserForm;
