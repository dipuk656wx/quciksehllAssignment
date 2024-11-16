import React, { useCallback, useRef, useState, ChangeEvent } from 'react';
import './style.css';
import useClickOutside from '../../utils/use-click-outside';

const Dropdown: React.FC<{
  grouping: string;
  setGrouping: (grouping: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
}> = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [visible, setVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement | null>(null);

  const openDropdown = useCallback(() => {
    setVisible(true);
  }, []);

  useClickOutside(componentRef, () => {
    setVisible(false);
  });

  const onGroupingChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setGrouping(e.target.value),
    [setGrouping]
  );

  const onOrderingChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => setOrdering(e.target.value),
    [setOrdering]
  );

  return (
    <div className="display-dropdown" ref={componentRef}>
      <div className="dropdown-label-container" onClick={openDropdown}>
        <img src="/icons/Display.svg" alt="display" width={16} height={16} />
        <div className="dropdown-label">Display</div>
        <img src="/icons/down.svg" alt="dropdown" width={16} height={16} />
      </div>
      <div className={`dropdown-content-container ${visible ? 'visible' : ''}`}>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Grouping</div>
          <select name="grouping" id="grouping" value={grouping} onChange={onGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="dropdown-content-row">
          <div className="dropdown-content-label">Ordering</div>
          <select name="ordering" id="ordering" value={ordering} onChange={onOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
