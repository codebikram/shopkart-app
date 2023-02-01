import { useNavigate } from 'react-router-dom';
import './categoryItem.styles.scss';

const CategoryItem = ({ category }) => {
  let { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const handleNavigate = () => navigate(route);
  return (
    <div className="category-item-container" onClick={handleNavigate}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
