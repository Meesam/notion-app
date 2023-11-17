"use client";

import React, { useRef, useState } from "react";
import { FaSquare, FaCheckSquare, FaMinusSquare } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import TreeView, { ITreeViewOnLoadDataProps } from "react-accessible-treeview";
import cx from "classnames";
import "./styles.css";
import {
  Plus,
  MoreHorizontal,
  FileText,
  Pin,
  User2,
  ListTodo,
  BookOpenCheck,
  BookText,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const initialData = [
  {
    name: "",
    id: 0,
    children: [1, 2, 3, 4, 5, 6],
    parent: null,
  },
  {
    name: "Getting Started",
    children: [],
    id: 1,
    parent: 0,
    isBranch: true,
  },
  {
    name: "Quick Note",
    children: [7],
    id: 2,
    parent: 0,
    isBranch: true,
  },
  {
    name: "Personal Home",
    children: [],
    id: 3,
    parent: 0,
    isBranch: true,
  },
  {
    name: "Task List",
    children: [],
    id: 4,
    parent: 0,
    isBranch: true,
  },
  {
    name: "Journal",
    children: [],
    id: 5,
    parent: 0,
    isBranch: true,
  },
  {
    name: "Reading List",
    children: [],
    id: 6,
    parent: 0,
    isBranch: true,
  },
  {
    name: "Sub Page",
    children: [],
    id: 7,
    parent: 2,
  },
];

function NavTree() {
  const loadedAlertElement = useRef(null);
  const [data, setData] = useState(initialData);
  const [nodesAlreadyLoaded, setNodesAlreadyLoaded] = useState([]);

  const updateTreeData = (list, id, children) => {
    const data = list.map((node) => {
      if (node.id === id) {
        node.children = children.map((el) => {
          return el.id;
        });
      }
      return node;
    });
    return data.concat(children);
  };

  const onLoadData = ({ element }: { element: any }) => {
    return new Promise((resolve) => {
      if (element.children.length > 0) {
        resolve();
        return;
      }
      setTimeout(() => {
        setData((value) =>
          updateTreeData(value, element.id, [
            {
              name: `Child Node ${value.length}`,
              children: [],
              id: value.length,
              parent: element.id,
              isBranch: true,
            },
            {
              name: "Another child Node",
              children: [],
              id: value.length + 1,
              parent: element.id,
            },
          ])
        );
        resolve();
      }, 1000);
    });
  };

  const wrappedOnLoadData = async (props: ITreeViewOnLoadDataProps) => {
    const nodeHasNoChildData = props.element.children.length === 0;
    const nodeHasAlreadyBeenLoaded = nodesAlreadyLoaded.find(
      (e) => e.id === props.element.id
    );

    await onLoadData(props);

    if (nodeHasNoChildData && !nodeHasAlreadyBeenLoaded) {
      const el = loadedAlertElement.current;
      setNodesAlreadyLoaded([...nodesAlreadyLoaded, props.element]);
      el && (el.innerHTML = `${props.element.name} loaded`);

      // Clearing aria-live region so loaded node alerts no longer appear in DOM
      setTimeout(() => {
        el && (el.innerHTML = "");
      }, 5000);
    }
  };

  const renderNavIcon = (element: string) => {
    switch (element) {
      case "Getting Started":
        return <FileText size={15} />;

      case "Quick Note":
        return <Pin size={15} />;

      case "Personal Home":
        return <User2 size={15} />;

      case "Task List":
        return <ListTodo size={15} />;

      case "Journal":
        return <BookOpenCheck size={15} />;

      case "Reading List":
        return <BookText size={15} />;

      default:
        return <FileText size={15} />;
    }
  };

  return (
    <>
      <div>
        <div
          className="visually-hidden"
          ref={loadedAlertElement}
          role="alert"
          aria-live="polite"
        ></div>
        <div className="checkbox">
          <TreeView
            data={data}
            aria-label="Checkbox tree"
            onLoadData={wrappedOnLoadData}
            propagateSelect
            togglableSelect
            propagateSelectUpwards
            nodeRenderer={({
              element,
              isBranch,
              isExpanded,
              isSelected,
              isHalfSelected,
              getNodeProps,
              level,
              handleSelect,
              handleExpand,
            }) => {
              const branchNode = (isExpanded: boolean, element: any) => {
                return isExpanded && element.children.length === 0 ? (
                  <>
                    <span
                      role="alert"
                      aria-live="assertive"
                      className="visually-hidden"
                    >
                      loading {element.name}
                    </span>
                    <AiOutlineLoading
                      aria-hidden={true}
                      className="loading-icon"
                    />
                  </>
                ) : (
                  <ArrowIcon isOpen={isExpanded} />
                );
              };
              return (
                <div
                  {...getNodeProps({ onClick: handleExpand })}
                  style={{ marginLeft: 10 * (level - 1) }}
                  className=" flex cursor-pointer items-center hover:bg-slate-300 rounded-sm group mb-2 h-6"
                >
                  {isBranch && branchNode(isExpanded, element)}

                  {renderNavIcon(element.name)}
                  <span className="ml-2 text-slate-500 text-sm">
                    {element.name}
                  </span>
                  <div className="ml-auto mr-2 hidden group-hover:flex space-x-2">
                    <MoreHorizontal size={14} />
                    <Plus size={14} />
                  </div>
                </div>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}

const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => {
  if (!isOpen) {
    return <ChevronRight size={15} />;
  } else {
    return <ChevronDown size={15} />;
  }
};

const CheckBoxIcon = ({ variant, ...rest }: { variant: any }) => {
  switch (variant) {
    case "all":
      return <FaCheckSquare {...rest} />;
    case "none":
      return <FaSquare {...rest} />;
    case "some":
      return <FaMinusSquare {...rest} />;
    default:
      return null;
  }
};

export default NavTree;
