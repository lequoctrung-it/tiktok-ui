import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn12-1.fna.fbcdn.net/v/t39.30808-6/281578251_3304658663103393_1187116181720772184_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fWxutbWIDyAAX-qZa5w&_nc_ht=scontent.fsgn12-1.fna&oh=00_AT98lGY8bhx8AE7DszBA0xQ8T8xoay9H6TEsZSb57jT0cw&oe=6293E3CB"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Quoc Trung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>leqtrungit</span>
            </div>
        </div>
    );
}

export default AccountItem;
