import { useEffect, useRef } from "preact/hooks";
import { useSignal, useComputed } from "@preact/signals";

import codeColor from "./fixtures/code-color.json";
//import agentFrameworks from "./fixtures/agent_frameworks.json";
import asymptoticNotations from "./fixtures/asymptotic-notations.json";
import timeComplexities from "./fixtures/time-complexities.json";
import sortingAlgorithms from "./fixtures/sorting-algorithms.json";
import searchAlgorithms from "./fixtures/search-algorithms.json";
import dataStructures from "./fixtures/data-structures.json";

import objectOriented from "./fixtures/object-oriented-programming.json";
import pyNotes from "./fixtures/python-notes.json";
import pyModules from "./fixtures/python-modules.json";
import apiNotes from "./fixtures/api-notes.json";
import sqlNotes from "./fixtures/sql-notes.json";
import resourcesLinks from "./fixtures/resources-links.json";
import sqlQuestionsAnswers from "./fixtures/sql-questions-answers.json";
import securityNotes from "./fixtures/security-notes.json";
import webServices from "./fixtures/web-services.json";
import systemDesign from "./fixtures/system-design.json";
import jsReactFundamentals from "./fixtures/js-react-fundamentals.json";
import genAI from "./fixtures/gen-ai.json";
import databases from "./fixtures/databases.json";


export function App() {
  const currentView = useSignal(0);
  const show = (value: any, view: any) =>
    currentView.value === value ? view : null;


  return (
    <>
      <ul class="navbar">
        <li onClick={() => (currentView.value = 0)}>Big-O</li>
        <li onClick={() => (currentView.value = 1)}>Data Structures</li>
        <li onClick={() => (currentView.value = 2)}>Sorting</li>
        <li onClick={() => (currentView.value = 3)}>Searching</li>
        <li onClick={() => (currentView.value = 4)}>Principles & Design</li>
        <li onClick={() => (currentView.value = 5)}>APIs</li>
        <li onClick={() => (currentView.value = 6)}>SQL</li>
        <li onClick={() => (currentView.value = 8)}>Python</li>
        <li onClick={() => (currentView.value = 9)}>Python Extended</li>
        <li onClick={() => (currentView.value = 10)}>Security</li>
        <li onClick={() => (currentView.value = 10)}>Web Services</li>
        <li onClick={() => (currentView.value = 11)}>System Design</li>
        <li onClick={() => (currentView.value = 14)}>JS/React Fundamentals</li>
        <li onClick={() => (currentView.value = 15)}>GenAI</li>
        <li onClick={() => (currentView.value = 16)}>Leetcode</li>
        <li onClick={() => (currentView.value = 17)}>Databases</li>
        <li onClick={() => (currentView.value = 99)}>Resources</li>
      </ul>

      {show(0, <AsymptoticTable />)}
      {show(1, <DataStructuresTable />)}
      {show(2, <SortingAlgorithmsTable />)}
      {show(3, <SearchAlgorithmsTable />)}
      {show(4, <ObjectOrientedTable />)}
      {show(5, <RestTable />)}
      {show(6, <SQLTable />)}
      {show(7, <PythonTable />)}
      {show(8, <PythonExtended />)}
      {show(9, <SecurityTable />)}
      {show(10, <WebServicesTable />)}
      {show(11, <SystemDesignTable />)}
      {show(14, <JavaScriptReactFundamentals />)}
      {show(15, <GenAITable />)}
      {show(16, <LeetcodeTable />)}
      {show(17, <DatabasesTable />)}
      {show(99, <ResourcesView />)}
    </>
  );
}


/*
Best    => big-omega
Average => theta
Worst   => big-o
*/


function LeetcodeTable() {
  const sortColumn = useSignal<string>("");
  const sortDirection = useSignal<"asc" | "desc">("asc");
  const searchQuery = useSignal("");
  const showAddModal = useSignal(false);
  const showInlineAdd = useSignal(false);
  const problems = useSignal([
    {
      id: 1,
      name: "Two Sum",
      category: "Arrays & Hash Table",
      description: {
        problem: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
        examples: [
          {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
          },
          {
            input: "nums = [3,2,4], target = 6",
            output: "[1,2]"
          },
          {
            input: "nums = [3,3], target = 6",
            output: "[0,1]"
          }
        ],
        constraints: [
          "2 ≤ nums.length ≤ 10⁴",
          "-10⁹ ≤ nums[i] ≤ 10⁹",
          "-10⁹ ≤ target ≤ 10⁹",
          "Only one valid answer exists."
        ]
      },
      solution: `def twoSum(nums, target):
    lookup = {}
    for i, num in enumerate(nums):
        if target - num in lookup:
            return [lookup[target - num], i]
        lookup[num] = i`,
      whiteboard: "./whiteboards/two-sum.png",
      solvedDate: "2024-03-19"
    },
    {
      id: 206,
      name: "Reverse Linked List",
      category: "Linked List",
      description: {
        problem: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
        examples: [
          {
            input: "head = [1,2,3,4,5]",
            output: "[5,4,3,2,1]"
          },
          {
            input: "head = [1,2]",
            output: "[2,1]"
          },
          {
            input: "head = []",
            output: "[]"
          }
        ],
        constraints: [
          "The number of nodes in the list is the range [0, 5000]",
          "-5000 ≤ Node.val ≤ 5000"
        ]
      },
      solution: `def reverseList(head):
    prev = None
    curr = head
    
    while curr:
        next_temp = curr.next
        curr.next = prev
        prev = curr
        curr = next_temp
    
    return prev`,
      whiteboard: "./whiteboards/reverse-linked-list.png",
      solvedDate: "2024-03-20"
    },
    {
      id: 3,
      name: "Longest Substring Without Repeating Characters",
      category: "Sliding Window",
      description: {
        problem: "Given a string s, find the length of the longest substring without repeating characters.",
        examples: [
          {
            input: 's = "abcabcbb"',
            output: "3",
            explanation: 'The answer is "abc", with the length of 3.'
          },
          {
            input: 's = "bbbbb"',
            output: "1",
            explanation: 'The answer is "b", with the length of 1.'
          },
          {
            input: 's = "pwwkew"',
            output: "3",
            explanation: 'The answer is "wke", with the length of 3.'
          }
        ],
        constraints: [
          "0 ≤ s.length ≤ 5 * 10⁴",
          "s consists of English letters, digits, symbols and spaces."
        ]
      },
      solution: `def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_length = 0
    
    for right in range(len(s)):
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_length = max(max_length, right - left + 1)
    
    return max_length`,
      whiteboard: "./whiteboards/longest-substring.png",
      solvedDate: "2024-03-21"
    },
    {
      id: 98,
      name: "Validate Binary Search Tree",
      category: "Binary Search Tree",
      description: {
        problem: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
        examples: [
          {
            input: "root = [2,1,3]",
            output: "true"
          },
          {
            input: "root = [5,1,4,null,null,3,6]",
            output: "false",
            explanation: "The root node's value is 5 but its right child's value is 4."
          }
        ],
        constraints: [
          "The number of nodes in the tree is in the range [1, 10⁴]",
          "-2³¹ ≤ Node.val ≤ 2³¹ - 1"
        ]
      },
      solution: `def isValidBST(root):
    def validate(node, low=-float('inf'), high=float('inf')):
        if not node:
            return True
        
        if node.val <= low or node.val >= high:
            return False
        
        return (validate(node.left, low, node.val) and 
                validate(node.right, node.val, high))
    
    return validate(root)`,
      whiteboard: "./whiteboards/validate-bst.png",
      solvedDate: "2024-03-22"
    }
  ]);

  const newProblem = useSignal({
    id: "",
    name: "",
    category: "",
    description: {
      problem: "",
      examples: [{ input: "", output: "", explanation: "" }],
      constraints: [""]
    },
    solution: "",
    whiteboard: "",
    solvedDate: new Date().toISOString().split('T')[0]
  });

  const inlineProblem = useSignal({
    id: "",
    name: "",
    category: "",
    description: {
      problem: "",
      examples: [{ input: "", output: "", explanation: "" }],
      constraints: [""]
    },
    solution: "",
    whiteboard: "",
    solvedDate: new Date().toISOString().split('T')[0]
  });

  const handleAddProblem = () => {
    const problem = {
      ...newProblem.value,
      id: parseInt(newProblem.value.id),
      description: {
        ...newProblem.value.description,
        examples: newProblem.value.description.examples.filter(ex => ex.input && ex.output),
        constraints: newProblem.value.description.constraints.filter(c => c)
      }
    };
    
    problems.value = [...problems.value, problem];
    showAddModal.value = false;
    newProblem.value = {
      id: "",
      name: "",
      category: "",
      description: {
        problem: "",
        examples: [{ input: "", output: "", explanation: "" }],
        constraints: [""]
      },
      solution: "",
      whiteboard: "",
      solvedDate: new Date().toISOString().split('T')[0]
    };
  };

  const handleInlineAdd = () => {
    const problem = {
      ...inlineProblem.value,
      id: parseInt(inlineProblem.value.id),
      description: {
        ...inlineProblem.value.description,
        examples: inlineProblem.value.description.examples.filter(ex => ex.input && ex.output),
        constraints: inlineProblem.value.description.constraints.filter(c => c)
      }
    };
    
    problems.value = [...problems.value, problem];
    showInlineAdd.value = false;
    inlineProblem.value = {
      id: "",
      name: "",
      category: "",
      description: {
        problem: "",
        examples: [{ input: "", output: "", explanation: "" }],
        constraints: [""]
      },
      solution: "",
      whiteboard: "",
      solvedDate: new Date().toISOString().split('T')[0]
    };
  };

  const addExample = () => {
    newProblem.value = {
      ...newProblem.value,
      description: {
        ...newProblem.value.description,
        examples: [...newProblem.value.description.examples, { input: "", output: "", explanation: "" }]
      }
    };
  };

  const addConstraint = () => {
    newProblem.value = {
      ...newProblem.value,
      description: {
        ...newProblem.value.description,
        constraints: [...newProblem.value.description.constraints, ""]
      }
    };
  };

  const handleSort = (column: string) => {
    if (sortColumn.value === column) {
      sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
    } else {
      sortColumn.value = column;
      sortDirection.value = "asc";
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn.value !== column) return "↕";
    return sortDirection.value === "asc" ? "↑" : "↓";
  };

  const filteredAndSortedProblems = useComputed(() => {
    // First filter based on search query
    const filtered = problems.value.filter(problem => {
      const searchLower = searchQuery.value.toLowerCase();
      return (
        problem.id.toString().includes(searchLower) ||
        problem.name.toLowerCase().includes(searchLower) ||
        problem.category.toLowerCase().includes(searchLower) ||
        problem.description.problem.toLowerCase().includes(searchLower) ||
        problem.solution.toLowerCase().includes(searchLower) ||
        problem.solvedDate.includes(searchLower)
      );
    });

    // Then sort if a sort column is selected
    if (!sortColumn.value) return filtered;
    
    return [...filtered].sort((a, b) => {
      const aValue = a[sortColumn.value as keyof typeof a];
      const bValue = b[sortColumn.value as keyof typeof b];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection.value === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection.value === "asc" 
          ? aValue - bValue 
          : bValue - aValue;
      }
      
      return 0;
    });
  });

  const handleImageUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        inlineProblem.value = { 
          ...inlineProblem.value, 
          whiteboard: event.target?.result as string 
        };
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Title text="Leetcode">
        <div class="search-container">
          <input
            type="text"
            placeholder="Search problems..."
            value={searchQuery.value}
            onInput={(e: any) => searchQuery.value = e.target.value}
            class="search-input"
          />
          {searchQuery.value && (
            <button 
              onClick={() => searchQuery.value = ""}
              class="clear-search"
              title="Clear search"
            >
              ×
            </button>
          )}
          <button 
            onClick={() => showAddModal.value = true}
            class="add-problem-btn"
          >
            Add Problem
          </button>
        </div>
      </Title>

      {showAddModal.value && (
        <div class="modal-overlay">
          <div class="modal-content">
            <h2>Add New Problem</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddProblem(); }}>
              <div class="form-group">
                <label>Problem ID:</label>
                <input
                  type="number"
                  value={newProblem.value.id}
                  onInput={(e: any) => newProblem.value = { ...newProblem.value, id: e.target.value }}
                  required
                />
              </div>
              
              <div class="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  value={newProblem.value.name}
                  onInput={(e: any) => newProblem.value = { ...newProblem.value, name: e.target.value }}
                  required
                />
              </div>
              
              <div class="form-group">
                <label>Category:</label>
                <input
                  type="text"
                  value={newProblem.value.category}
                  onInput={(e: any) => newProblem.value = { ...newProblem.value, category: e.target.value }}
                  required
                />
              </div>
              
              <div class="form-group">
                <label>Problem Description:</label>
                <textarea
                  value={newProblem.value.description.problem}
                  onInput={(e: any) => newProblem.value = { 
                    ...newProblem.value, 
                    description: { ...newProblem.value.description, problem: e.target.value }
                  }}
                  required
                />
              </div>
              
              <div class="form-group">
                <label>Examples:</label>
                {newProblem.value.description.examples.map((example, index) => (
                  <div class="example-group">
                    <input
                      type="text"
                      placeholder="Input"
                      value={example.input}
                      onInput={(e: any) => {
                        const newExamples = [...newProblem.value.description.examples];
                        newExamples[index] = { ...example, input: e.target.value };
                        newProblem.value = {
                          ...newProblem.value,
                          description: { ...newProblem.value.description, examples: newExamples }
                        };
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Output"
                      value={example.output}
                      onInput={(e: any) => {
                        const newExamples = [...newProblem.value.description.examples];
                        newExamples[index] = { ...example, output: e.target.value };
                        newProblem.value = {
                          ...newProblem.value,
                          description: { ...newProblem.value.description, examples: newExamples }
                        };
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Explanation (optional)"
                      value={example.explanation}
                      onInput={(e: any) => {
                        const newExamples = [...newProblem.value.description.examples];
                        newExamples[index] = { ...example, explanation: e.target.value };
                        newProblem.value = {
                          ...newProblem.value,
                          description: { ...newProblem.value.description, examples: newExamples }
                        };
                      }}
                    />
                  </div>
                ))}
                <button type="button" onClick={addExample} class="add-btn">Add Example</button>
              </div>
              
              <div class="form-group">
                <label>Constraints:</label>
                {newProblem.value.description.constraints.map((constraint, index) => (
                  <input
                    type="text"
                    value={constraint}
                    onInput={(e: any) => {
                      const newConstraints = [...newProblem.value.description.constraints];
                      newConstraints[index] = e.target.value;
                      newProblem.value = {
                        ...newProblem.value,
                        description: { ...newProblem.value.description, constraints: newConstraints }
                      };
                    }}
                  />
                ))}
                <button type="button" onClick={addConstraint} class="add-btn">Add Constraint</button>
              </div>
              
              <div class="form-group">
                <label>Solution:</label>
                <textarea
                  value={newProblem.value.solution}
                  onInput={(e: any) => newProblem.value = { ...newProblem.value, solution: e.target.value }}
                  required
                />
              </div>
              
              <div class="form-group">
                <label>Whiteboard Image:</label>
                <div class="image-upload-container">
                  <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                    onChange={(e: any) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          newProblem.value = { 
                            ...newProblem.value, 
                            whiteboard: event.target?.result as string 
                          };
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    class="image-upload-input"
                    id="whiteboard-upload"
                  />
                  <label for="whiteboard-upload" class="image-upload-label">
                    {newProblem.value.whiteboard ? (
                      <div class="image-preview">
                        <img src={newProblem.value.whiteboard} alt="Whiteboard preview" />
                        <button 
                          type="button" 
                          class="remove-image-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            newProblem.value = { ...newProblem.value, whiteboard: "" };
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <div class="upload-placeholder">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <span>Click to upload whiteboard image</span>
                        <small>or drag and drop</small>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label>Solved Date:</label>
                <input
                  type="date"
                  value={newProblem.value.solvedDate}
                  onInput={(e: any) => newProblem.value = { ...newProblem.value, solvedDate: e.target.value }}
                  required
                />
              </div>
              
              <div class="modal-buttons">
                <button type="submit" class="submit-btn">Add Problem</button>
                <button type="button" onClick={() => showAddModal.value = false} class="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("id")} style="cursor: pointer">
              Problem # {getSortIcon("id")}
            </th>
            <th onClick={() => handleSort("name")} style="cursor: pointer">
              Name {getSortIcon("name")}
            </th>
            <th onClick={() => handleSort("category")} style="cursor: pointer">
              Category {getSortIcon("category")}
            </th>
            <th>Description</th>
            <th>Full Solution</th>
            <th>Whiteboard</th>
            <th onClick={() => handleSort("solvedDate")} style="cursor: pointer">
              Solved Date {getSortIcon("solvedDate")}
            </th>
            <th style="width: 50px">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSortedProblems.value.map((problem) => (
            <tr>
              <td>{problem.id}</td>
              <td>{problem.name}</td>
              <td>{problem.category}</td>
              <td>
                <details>
                  <summary>Show Description</summary>
                  <div class="problem-description">
                    <p>{problem.description.problem}</p>
                    <br/>
                    {problem.description.examples.map((example, index) => (
                      <>
                        <strong>Example {index + 1}:</strong>
                        <pre>
Input: {example.input}
Output: {example.output}
{example.explanation ? `Explanation: ${example.explanation}` : ""}
                        </pre>
                      </>
                    ))}
                    <br/>
                    <strong>Constraints:</strong>
                    <ul>
                      {problem.description.constraints.map((constraint) => (
                        <li>{constraint}</li>
                      ))}
                    </ul>
                  </div>
                </details>
              </td>
              <td>
                <details>
                  <summary>Show</summary>
                  <Code
                    lang="python"
                    text={problem.solution}
                  />
                </details>
              </td>
              <td>
                <img src={problem.whiteboard} alt={`${problem.name} Whiteboard`} style="max-width:120px;"/>
              </td>
              <td>{problem.solvedDate}</td>
              <td>
                <button 
                  onClick={() => {
                    if (confirm(`Are you sure you want to delete "${problem.name}"?`)) {
                      problems.value = problems.value.filter(p => p.id !== problem.id);
                    }
                  }}
                  class="delete-btn"
                  title="Delete problem"
                >
                  ×
                </button>
              </td>
            </tr>
          ))}
          
          {/* Inline Add Row */}
          {showInlineAdd.value ? (
            <tr class="inline-add-row">
              <td>
                <input
                  type="number"
                  value={inlineProblem.value.id}
                  onInput={(e: any) => inlineProblem.value = { ...inlineProblem.value, id: e.target.value }}
                  placeholder="Problem #"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={inlineProblem.value.name}
                  onInput={(e: any) => inlineProblem.value = { ...inlineProblem.value, name: e.target.value }}
                  placeholder="Name"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={inlineProblem.value.category}
                  onInput={(e: any) => inlineProblem.value = { ...inlineProblem.value, category: e.target.value }}
                  placeholder="Category"
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={inlineProblem.value.description.problem}
                  onInput={(e: any) => inlineProblem.value = { 
                    ...inlineProblem.value, 
                    description: { ...inlineProblem.value.description, problem: e.target.value }
                  }}
                  placeholder="Problem Description"
                  required
                />
              </td>
              <td>
                <textarea
                  value={inlineProblem.value.solution}
                  onInput={(e: any) => inlineProblem.value = { ...inlineProblem.value, solution: e.target.value }}
                  placeholder="Solution"
                  required
                />
              </td>
              <td>
                <div class="image-upload-container">
                  {inlineProblem.value.whiteboard ? (
                    <div class="image-preview">
                      <img src={inlineProblem.value.whiteboard} alt="Whiteboard preview" />
                      <button 
                        type="button" 
                        class="remove-image-btn"
                        onClick={() => {
                          inlineProblem.value = { ...inlineProblem.value, whiteboard: "" };
                        }}
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <label class="image-upload-label">
                      <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        onChange={handleImageUpload}
                        class="image-upload-input"
                      />
                      <div class="upload-placeholder">
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" y1="3" x2="12" y2="15"></line>
                        </svg>
                        <span>Click to upload whiteboard</span>
                        <small>or drag and drop</small>
                      </div>
                    </label>
                  )}
                </div>
              </td>
              <td>
                <input
                  type="date"
                  value={inlineProblem.value.solvedDate}
                  onInput={(e: any) => inlineProblem.value = { ...inlineProblem.value, solvedDate: e.target.value }}
                  required
                />
              </td>
              <td>
                <div class="inline-actions">
                  <button 
                    onClick={handleInlineAdd}
                    class="save-btn"
                    title="Save problem"
                  >
                    ✓
                  </button>
                  <button 
                    onClick={() => showInlineAdd.value = false}
                    class="cancel-btn"
                    title="Cancel"
                  >
                    ×
                  </button>
                </div>
              </td>
            </tr>
          ) : (
            <tr class="add-row-trigger">
              <td>
                <button 
                  onClick={() => showInlineAdd.value = true}
                  class="add-inline-btn"
                >
                  + Add New Problem
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <style>{`
        .problem-description {
          padding: 10px;
          background: #f8f9fa;
          border-radius: 4px;
          font-size: 0.9em;
          line-height: 1.5;
        }
        .problem-description pre {
          background: #f1f3f5;
          padding: 10px;
          border-radius: 4px;
          margin: 10px 0;
        }
        .problem-description code {
          background: #e9ecef;
          padding: 2px 4px;
          border-radius: 3px;
          font-family: monospace;
        }
        .problem-description ul {
          margin: 10px 0;
          padding-left: 20px;
        }
        .problem-description li {
          margin: 5px 0;
        }
        th {
          user-select: none;
        }
        th:hover {
          background-color: #f0f0f0;
        }
        .search-container {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: auto;
        }
        .search-input {
          padding: 8px 12px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
          width: 250px;
          transition: border-color 0.2s;
        }
        .search-input:focus {
          outline: none;
          border-color: #0366d6;
          box-shadow: 0 0 0 2px rgba(3, 102, 214, 0.1);
        }
        .clear-search {
          background: none;
          border: none;
          color: #666;
          font-size: 18px;
          cursor: pointer;
          padding: 0 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
        }
        .clear-search:hover {
          background-color: #f0f0f0;
          color: #333;
        }
        .add-problem-btn {
          padding: 8px 16px;
          background-color: #2ea44f;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          transition: background-color 0.2s;
        }
        .add-problem-btn:hover {
          background-color: #2c974b;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .modal-content {
          background: white;
          padding: 24px;
          border-radius: 8px;
          width: 90%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
        }
        .form-group {
          margin-bottom: 16px;
        }
        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        .form-group textarea {
          min-height: 100px;
          resize: vertical;
        }
        .example-group {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 8px;
          margin-bottom: 8px;
        }
        .add-btn {
          padding: 4px 8px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        }
        .add-btn:hover {
          background-color: #e0e0e0;
        }
        .modal-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          margin-top: 24px;
        }
        .submit-btn {
          padding: 8px 16px;
          background-color: #2ea44f;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .submit-btn:hover {
          background-color: #2c974b;
        }
        .cancel-btn {
          padding: 8px 16px;
          background-color: #f0f0f0;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
        }
        .cancel-btn:hover {
          background-color: #e0e0e0;
        }
        .delete-btn {
          background: none;
          border: none;
          color: #dc3545;
          font-size: 18px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          transition: all 0.2s;
        }
        .delete-btn:hover {
          background-color: #dc3545;
          color: white;
        }
        .image-upload-container {
          margin-top: 8px;
        }
        .image-upload-input {
          display: none;
        }
        .image-upload-label {
          display: block;
          cursor: pointer;
          border: 2px dashed #ddd;
          border-radius: 8px;
          padding: 20px;
          text-align: center;
          transition: all 0.2s;
        }
        .image-upload-label:hover {
          border-color: #0366d6;
          background-color: #f8f9fa;
        }
        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #666;
        }
        .upload-placeholder svg {
          color: #0366d6;
        }
        .upload-placeholder small {
          color: #999;
        }
        .image-preview {
          position: relative;
          display: inline-block;
        }
        .image-preview img {
          max-width: 200px;
          max-height: 200px;
          border-radius: 4px;
        }
        .remove-image-btn {
          position: absolute;
          top: -10px;
          right: -10px;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          padding: 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .remove-image-btn:hover {
          background: #c82333;
        }
        
        .inline-add-row input,
        .inline-add-row textarea {
          width: 100%;
          padding: 4px 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }
        
        .inline-add-row textarea {
          min-height: 60px;
          resize: vertical;
        }
        
        .inline-actions {
          display: flex;
          gap: 4px;
        }
        
        .save-btn,
        .cancel-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          transition: all 0.2s;
        }
        
        .save-btn {
          color: #2ea44f;
        }
        
        .save-btn:hover {
          background-color: #2ea44f;
          color: white;
        }
        
        .cancel-btn {
          color: #dc3545;
        }
        
        .cancel-btn:hover {
          background-color: #dc3545;
          color: white;
        }
        
        .add-row-trigger {
          background-color: #f8f9fa;
        }
        
        .add-inline-btn {
          width: 100%;
          padding: 12px;
          background: none;
          border: 2px dashed #ddd;
          border-radius: 4px;
          color: #666;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s;
        }
        
        .add-inline-btn:hover {
          border-color: #0366d6;
          color: #0366d6;
          background-color: #f0f7ff;
        }

        .image-upload-container {
          width: 120px;
          height: 120px;
          position: relative;
        }
        
        .image-upload-input {
          display: none;
        }
        
        .image-upload-label {
          display: block;
          width: 100%;
          height: 100%;
          cursor: pointer;
          border: 2px dashed #ddd;
          border-radius: 4px;
          transition: all 0.2s;
        }
        
        .image-upload-label:hover {
          border-color: #0366d6;
          background-color: #f0f7ff;
        }
        
        .upload-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #666;
          text-align: center;
          padding: 8px;
        }
        
        .upload-placeholder svg {
          color: #0366d6;
          margin-bottom: 8px;
        }
        
        .upload-placeholder small {
          color: #999;
          font-size: 12px;
        }
        
        .image-preview {
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
        
        .remove-image-btn {
          position: absolute;
          top: -8px;
          right: -8px;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          padding: 0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .remove-image-btn:hover {
          background: #c82333;
        }
      `}</style>
    </>
  );
}

/* Components */
function Note(props: any) {
  return (
    <div class="note-box">
      <div class="note-title">{props.title || "Note"}</div>
      <span class="note-text">{props.children}</span>
    </div>
  );
}

function Title(props: any) {
  return (
    <div class="title-bar">
      <span class="title">{props.text}</span>
      {props.children}
    </div>
  );
}

const Code = (props: any) => {
  // Create a ref to the code element
  const codeRef = useRef(null);

  // Run Highlight.js on the code element when the component mounts
  useEffect(() => {
    if (codeRef.current) {
      //@ts-ignore
      hljs.highlightBlock(codeRef.current);
    }
  }, [props.text]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${props.lang}`}>
        {props.text}
      </code>
    </pre>
  );
};

/* App */
function VisualChart() {
  return <img src="./big-o-chart.png" />;
}

function AsymptoticTable() {
  const asymptoticRows = asymptoticNotations.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>{item.notation}</td>
      <td class="tal">{item.description}</td>
      <td>{item.simplified}</td>
      <td class="tal">{item.note}</td>
    </tr>
  ));

  const TD = (p: any) => (
    //@ts-ignore
    <td class={`${codeColor[p.item]}`}>{p.name || p.item}</td>
  );

  const complexityRows = timeComplexities.map((item) => (
    <tr>
      <td>{item.name}</td>
      <TD name={item.notation} item={item.level} />
      <td class="tal">{item.description}</td>
      <TD item={item.level} />
    </tr>
  ));

  return (
    <>
      <Title text="Asymptotic Notations" />
      <table>
        <thead>
          <tr>
            <th style="width: 100px">Name</th>
            <th>Notation</th>
            <th>Description</th>
            <th style="width: 120px">Simplified</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>{asymptoticRows}</tbody>
      </table>

      <Note>
        Asymptotic notations like <strong>Big O</strong>,{" "}
        <strong>Big Omega</strong> and <strong>Big Theta</strong>, provide
        insights into the runtime performance characteristics of algorithms.
        <br />
        On the other hand, terms like <strong>Best Case</strong>,{" "}
        <strong>Worst Case</strong> and <strong>Expected Case</strong> describe
        the algorithm's performance under specific conditions or input.
        <br />
        Please note that there is{" "}
        <strong>no specific relationship between these two concepts</strong>.
      </Note>

      <br />

      <Title text="Time & Space Complexities" />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Notation</th>
            <th>Description</th>
            <th>Quality</th>
          </tr>
        </thead>
        <tbody>{complexityRows}</tbody>
      </table>

      <Note>
        <strong>Log(n)</strong> without a specified base, it's usually assumed
        to be <strong>base 2</strong>.
      </Note>

      <br />

      <div class="tac">
        <div class="title-bar" style="justify-content:center;">
          <span class="title">Visual Chart</span>
        </div>
        <VisualChart />
      </div>
    </>
  );
}

function DataStructuresTable() {
  const searchQuery = useSignal("");
  const dataset = useComputed(() => {
    return dataStructures.filter(
      (row) =>
        row.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.group.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  //@ts-ignore
  const TD = (p: any) => <td class={`${codeColor[p.item]}`}>{p.item}</td>;

  const theTable = dataset.value.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td>
        <img class="shape" src={`./shapes/${item.shape}`} />
      </td>
      <td>{item.group}</td>
      <td class="tal">{item.description}</td>

      <TD item={item.time.average.access} />
      <TD item={item.time.average.search} />
      <TD item={item.time.average.insertion} />
      <TD item={item.time.average.deletion} />

      <TD item={item.time.worst.access} />
      <TD item={item.time.worst.search} />
      <TD item={item.time.worst.insertion} />
      <TD item={item.time.worst.deletion} />

      <TD item={item.space.worst} />
    </tr>
  ));

  const CrudHeaders = ["Access", "Search", "Insertion", "Deletion"].map(
    (item) => <th>{item}</th>
  );

  return (
    <>
      <Title text="Data Structures">
        <input
          onInput={(e: any) => (searchQuery.value = e.target.value)}
          placeholder="Search"
        />
      </Title>

      <table>
        <thead>
          <tr>
            <th colspan={4}></th>
            <th colspan={8}>Time Complexity</th>
            <th>Space Complexity</th>
          </tr>
          <tr>
            <th colspan={4}></th>
            <th colspan={4}>Average</th>
            <th colspan={4}>Worst</th>
            <th>Worst</th>
          </tr>
          <tr>
            <th style="width: 140px">Data Structure</th>
            <th style="width: 100px">Shape</th>
            <th style="width: 60px">Group</th>
            <th style="width: 240px">Description</th>
            {CrudHeaders}
            {CrudHeaders}
            <th></th>
          </tr>
        </thead>
        <tbody>{theTable}</tbody>
      </table>
    </>
  );
}

export function SortingAlgorithmsTable() {
  const searchQuery = useSignal("");
  const dataset = useComputed(() => {
    return sortingAlgorithms.filter((row) =>
      row.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  //@ts-ignore
  const TD = (p: any) => <td class={`${codeColor[p.item]}`}>{p.item}</td>;

  const theTable = dataset.value.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td class="tal" style="height: 60px">
        {item.description}
      </td>

      <TD item={item.time.best} />
      <TD item={item.time.average} />
      <TD item={item.time.worst} />

      <TD item={item.space.worst} />
    </tr>
  ));

  return (
    <>
      <Title text="Sorting Algorithms">
        <input
          onInput={(e: any) => (searchQuery.value = e.target.value)}
          placeholder="Search"
        />
      </Title>

      <table>
        <thead>
          <tr>
            <th colspan={2}></th>
            <th colspan={3}>Time Complexity</th>
            <th>Space Complexity</th>
          </tr>
          <tr>
            <th style="width: 100px">Algorithm</th>
            <th style="width: 600px">Description</th>
            <th>Best</th>
            <th>Average</th>
            <th>Worst</th>
            <th>Worst</th>
          </tr>
        </thead>
        <tbody>{theTable}</tbody>
      </table>
    </>
  );
}

function SearchAlgorithmsTable() {
  const arrayTable = searchAlgorithms.array.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td class="tal">{item.description}</td>
      <td>{item.average}</td>
      <td>{item.worst}</td>
    </tr>
  ));

  const graphTable = searchAlgorithms.graph.map((item) => (
    <tr>
      <td>{item.name}</td>
      <td class="tal">{item.description}</td>
      <td>{item.average}</td>
      <td>{item.worst}</td>
    </tr>
  ));

  return (
    <>
      <Title text="Array Search Operations" />

      <div>
        <table>
          <thead>
            <tr>
              <th style="width: 100px">Algorithm</th>
              <th>Description</th>
              <th>Average Time Complexity</th>
              <th>Worst Time Complexity</th>
            </tr>
          </thead>
          <tbody>{arrayTable} </tbody>
        </table>
      </div>

      <br />

      <Title text="Graph Search Operations" />

      <div style="display: flex">
        <div>
          <table>
            <thead>
              <tr>
                <th style="width: 100px">Algorithm</th>
                <th>Description</th>
                <th>Average Time Complexity</th>
                <th>Worst Time Complexity</th>
              </tr>
            </thead>
            <tbody>{graphTable} </tbody>
          </table>
        </div>

        <div class="graph-help" style="width: 440px">
          <ul>
            <li>
              <code>v</code>: Number of vertices (nodes) in the graph.
            </li>
            <li>
              <code>e</code>: Number of edges in the graph.
            </li>
            <li>
              <code>b</code>: Branching factor of the search tree.
            </li>
            <li>
              <code>d</code>: Depth of the optimal solution.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function ObjectOrientedTable() {
  const tableRow = (item: any) => (
    <tr>
      <td>{item.name}</td>
      <td class="tal">{item.description}</td>
      <td class="tal">
          <pre>
            <code>{item.example}</code>
          </pre>
      </td>
    </tr>
  );

  return (
    <>
      <Title text="Object-Oriented Programming (OOP)" />
      <table>
        <thead>
          <tr>
            <th style="width: 100px">Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{objectOriented.oop.map(tableRow)}</tbody>
      </table>

      <br />

      <Title text="Solid Principles" />
      <table>
        <thead>
          <tr>
            <th style="width: 160px">Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{objectOriented.solid.map(tableRow)}</tbody>
      </table>

      <br />

      <Title text="Software Design Patterns" />
      <table>
        <thead>
          <tr>
            <th style="width: 160px">Pattern</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{objectOriented.design.map(tableRow)}</tbody>
      </table>

      <br />

      <Title text="Software Development Principles" />
      <table>
        <thead>
          <tr>
            <th style="width: 260px">Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{objectOriented.principles.map(tableRow)}</tbody>
      </table>

      <br />

      <Title text="Software Development Paradigms" />
      <table>
        <thead>
          <tr>
            <th style="width: 360px">Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>{objectOriented.paradigms.map(tableRow)}</tbody>
      </table>
    </>
  );
}

function RestTable() {
  return (
    <>
      <div style="display: flex; ">
        <div>
          <Title text="REST Architectural Constraints" />
          <table>
            <thead>
              <tr>
                <th style="width: 200px">Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {apiNotes.rest_constraints.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td class="tal">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <Note>
            <strong>REST</strong> stands for{" "}
            <strong>REpresentational State Transfer</strong>
          </Note>
        </div>

        <div style="margin-left: 30px;">
          <Title text="REST Methods" />
          <table style="width:300px">
            <thead>
              <tr>
                <th>Name</th>
                <th>CRUD</th>
              </tr>
            </thead>
            <tbody>
              {apiNotes.rest_methods.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style="margin-left: 30px;">
          <Title text="GOOD REST API DESIGN PRINCIPLES" />
          <table style="width:700px">
            <thead>
              <tr>
                <th>Name</th>
                <th>CRUD</th>
              </tr>
            </thead>
            <tbody>
              {apiNotes.rest_api_good_design.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      
      <br />

      <div>
        <Title text="GraphQL" />
        <table>
          <thead>
            <tr>
              <th style="width: 160px">Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {apiNotes.graphql.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td class="tal">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function SQLTable() {
  return (
    <>
      <Title text="SQL (Structured Query Language)" />
      <Code lang="sql" text={`SELECT column_1, column_2 FROM table_name;`} />

      <br />

      <table>
        <thead>
          <tr>
            <th style="width: 120px">Statement</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {sqlNotes.map((item) => (
            <tr>
              <td>{item.statement}</td>
              <td class="tal">{item.description}</td>
              <td class="tal">
                <Code lang="sql" text={item.example} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />

      <Title text="SQL Interview Questions" />
      <div class="qa-list">
        {sqlQuestionsAnswers.map((qa, index) => (
          <details>
            <summary>{`${index + 1}. ${qa.question}`}</summary>
            <div class="answer">
              {qa.answer.split('\n').map((line) => (
                <div>{line}</div>
              ))}

              <div class="code-example">
                <Code lang="sql" text={qa.code_example} />
              </div>
            </div>
          </details>
        ))}
      </div>
      <style>
        {`
          .answer {
            padding: 12px;
            line-height: 1.8;
            background-color: #f8f8f8;
            border-radius: 4px;
            margin: 8px 0;
          }
          .code-example {
            margin-top: 12px;
          }
          details {
            margin: 8px 0;
          }
          summary {
            cursor: pointer;
            padding: 8px;
            background-color: #eee;
            border-radius: 4px;
          }
          summary:hover {
            background-color: #ddd;
          }
        `}
      </style>
      
    </>
  );
}

function PythonDunderMethodsTable() {
  const searchQuery = useSignal("");
  const datasetMagic = useComputed(() => {
    return pyNotes.magic.filter(
      (row) =>
        row.method.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return (
    <>
      <Title text="Dunder Methods">
        <input
          onInput={(e: any) => (searchQuery.value = e.target.value)}
          placeholder="Search"
        />
      </Title>
      <table>
        <thead>
          <tr>
            <th style="width: 110px">Magic Method</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {datasetMagic.value.map((item) => (
            <tr>
              <td>{item.method}</td>
              <td class="tal">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function PythonZenTable() {
  return (
    <>
      <Title text="PEP 20 – The Zen of Python" />
      <table>
        <thead>
          <tr>
            <th style="width: 30px">Index</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {pyNotes.zen.map((item) => (
            <tr>
              <td>{item.index}</td>
              <td class="tal">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function PythonOtherNotesTable() {
  return (
    <>
      <Title text="Useful Notes" />
      <table>
        <thead>
          <tr>
            <th style="width: 160px">Title</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {pyNotes.others.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td class="tal">{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function PythonTable() {
  return (
    <div style="display: flex; justify-content: space-between">
      <div>
        <PythonDunderMethodsTable />
      </div>
      <div>
        <PythonZenTable />
      </div>
      <div>
        <PythonOtherNotesTable />
      </div>
    </div>
  );
}

function PythonMethodsTable() {
  const allPyMethods: any = [];
  Object.keys(pyModules).forEach((group: any) => {
    //@ts-ignore
    pyModules[group].forEach((item) => {
      allPyMethods.push({
        method: item.method,
        group: group,
        description: item.description,
      });
    });
  });

  const searchQuery = useSignal("");
  const datasetMagic = useComputed(() => {
    return allPyMethods.filter(
      (row: any) =>
        row.method.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.group.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        row.description.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  return (
    <>
      <Title text="Common Methods">
        <input
          onInput={(e: any) => (searchQuery.value = e.target.value)}
          placeholder="Search"
        />
      </Title>
      <table>
        <thead>
          <tr>
            <th style="width: 380px">Method</th>
            <th>Group</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {datasetMagic.value.map((item: any) => (
            <tr>
              <td>{item.method}</td>
              <td>{item.group}</td>
              <td class="tal">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function PythonExtended() {
  return (
    <div style="display: flex; justify-content: space-between">
      <div>
        <PythonMethodsTable />
      </div>
    </div>
  );
}

function ResourcesView() {
  return (
    <>
      <div class="title-bar">
        <span class="title">Resources Links</span>
      </div>
      <ul class="links">
        {resourcesLinks.map((item) => (
          <li>
            <a href={item.url} target="_blank">
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div>
        <strong>Disclaimer:</strong> The information in this website was gather
        with the help of ChatGPT and Copilot.
      </div>
    </>
  );
}

function WebServicesTable() {
  return (
    <>
      <Title text="Web Services: REST vs SOAP" />
      
      <div class="web-services-container">
        {/* Main Services Grid */}
        <div class="services-grid">
          {webServices.web_services.map((service) => (
            <div class="service-card">
              <h3>{service.name}</h3>
              <p class="description">{service.description}</p>
              
              <div class="concepts-section">
                <h4>Key Concepts</h4>
                <ul>
                  {service.key_concepts.map((concept) => (
                    <li>{concept}</li>
                  ))}
                </ul>
              </div>

              <div class="characteristics-section">
                <h4>Characteristics</h4>
                {service.characteristics.map((char) => (
                  <div class="characteristic">
                    <strong>{char.name}:</strong> {char.details}
                  </div>
                ))}
              </div>

              <div class="pros-cons">
                <div class="advantages">
                  <h4>Advantages</h4>
                  <ul>
                    {service.advantages.map((adv) => (
                      <li>{adv}</li>
                    ))}
                  </ul>
                </div>
                
                <div class="disadvantages">
                  <h4>Disadvantages</h4>
                  <ul>
                    {service.disadvantages.map((disadv) => (
                      <li>{disadv}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div class="best-practices">
                <h4>Best Practices</h4>
                <ul>
                  {service.best_practices.map((practice) => (
                    <li>{practice}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div class="comparison-section">
          <h3>Comparison</h3>
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>REST</th>
                <th>SOAP</th>
              </tr>
            </thead>
            <tbody>
              {webServices.comparison.criteria.map((criterion) => (
                <tr>
                  <td><strong>{criterion.aspect}</strong></td>
                  <td>{criterion.REST}</td>
                  <td>{criterion.SOAP}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div class="use-cases">
            <h3>Common Use Cases</h3>
            <div class="use-cases-grid">
              <div>
                <h4>REST</h4>
                <ul>
                  {webServices.comparison.use_cases.REST.map((useCase) => (
                    <li>{useCase}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>SOAP</h4>
                <ul>
                  {webServices.comparison.use_cases.SOAP.map((useCase) => (
                    <li>{useCase}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .web-services-container {
          padding: 20px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin-bottom: 40px;
        }

        .service-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .service-card h3 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }

        .concepts-section,
        .characteristics-section,
        .pros-cons,
        .best-practices {
          margin-top: 20px;
        }

        .characteristic {
          margin: 10px 0;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          margin: 20px 0;
        }

        .comparison-table th,
        .comparison-table td {
          padding: 12px;
          border: 1px solid #ddd;
          text-align: left;
        }

        .comparison-table th {
          background: #f5f6fa;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
          margin-top: 20px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #3498db;
        }

        .advantages li:before {
          color: #27ae60;
        }

        .disadvantages li:before {
          color: #e74c3c;
        }

        @media (max-width: 768px) {
          .services-grid,
          .pros-cons,
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}

function SystemDesignTable() {
  return (
    <>
      <Title text="System Design Patterns" />
      
      <div class="system-design-container">
        {/* Architectural Patterns */}
        <section class="design-section">
          <h3>Architectural Patterns</h3>
          <div class="patterns-grid">
            {systemDesign.architectural_patterns.map((pattern) => (
              <div class="pattern-card">
                <h4>{pattern.name}</h4>
                <p>{pattern.description}</p>
                
                <div class="characteristics">
                  <h5>Key Characteristics</h5>
                  <ul>
                    {pattern.key_characteristics.map((char) => (
                      <li>{char}</li>
                    ))}
                  </ul>
                </div>

                <div class="pros-cons">
                  <div class="advantages">
                    <h5>Advantages</h5>
                    <ul>
                      {pattern.advantages.map((adv) => (
                        <li>{adv}</li>
                      ))}
                    </ul>
                  </div>
                  <div class="challenges">
                    <h5>Challenges</h5>
                    <ul>
                      {pattern.challenges.map((challenge) => (
                        <li>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Scalability Patterns */}
        <section class="design-section">
          <h3>Scalability Patterns</h3>
          <div class="patterns-grid">
            {systemDesign.scalability_patterns.map((pattern) => (
              <div class="pattern-card">
                <h4>{pattern.name}</h4>
                <p>{pattern.description}</p>
                
                {pattern.types && (
                  <div class="types">
                    <h5>Types</h5>
                    <ul>
                      {pattern.types.map((type) => (
                        <li>{type}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {pattern.strategies && (
                  <div class="strategies">
                    <h5>Strategies</h5>
                    <ul>
                      {pattern.strategies.map((strategy) => (
                        <li>{strategy}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {pattern.considerations && (
                  <div class="considerations">
                    <h5>Considerations</h5>
                    <ul>
                      {pattern.considerations.map((consideration) => (
                        <li>{consideration}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Common Components */}
        <section class="design-section">
          <h3>Common Components</h3>
          <div class="components-grid">
            {systemDesign.common_components.map((component) => (
              <div class="component-card">
                <h4>{component.name}</h4>
                <p>{component.description}</p>
                
                {component.responsibilities && (
                  <div class="responsibilities">
                    <h5>Responsibilities</h5>
                    <ul>
                      {component.responsibilities.map((resp) => (
                        <li>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {component.use_cases && (
                  <div class="use-cases">
                    <h5>Use Cases</h5>
                    <ul>
                      {component.use_cases.map((useCase) => (
                        <li>{useCase}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Best Practices */}
        <section class="design-section">
          <h3>Best Practices</h3>
          <div class="practices-grid">
            {systemDesign.best_practices.map((category) => (
              <div class="practice-card">
                <h4>{category.category}</h4>
                <ul>
                  {category.practices.map((practice) => (
                    <li>{practice}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Interview Process Section */}
        <section class="design-section">
          <h3>System Design Interview Process</h3>
          <div class="process-grid">
            {systemDesign.interview_process.steps.map((step) => (
              <div class="process-card">
                <h4>{step.phase}</h4>
                <p>{step.description}</p>
                
                {step.key_questions && (
                  <div class="questions">
                    <h5>Key Questions</h5>
                    <ul>
                      {step.key_questions.map((q) => (
                        <li>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {step.key_points && (
                  <div class="points">
                    <h5>Key Points</h5>
                    <ul>
                      {step.key_points.map((point) => (
                        <li>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {step.considerations && (
                  <div class="considerations">
                    <h5>Considerations</h5>
                    <ul>
                      {step.considerations.map((item) => (
                        <li>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {step.components && (
                  <div class="components">
                    <h5>Components</h5>
                    <ul>
                      {step.components.map((component) => (
                        <li>{component}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Important Questions Section */}
        <section class="design-section">
          <h3>Important Questions by Category</h3>
          <div class="questions-grid">
            {Object.entries(systemDesign.interview_process.important_questions).map(([category, questions]) => (
              <div class="question-card">
                <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
                <ul>
                  {questions.map((question) => (
                    <li>{question}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Common Numbers Section */}
        <section class="design-section">
          <h3>Common Numbers to Know</h3>
          <div class="numbers-container">
            <div class="latency-table">
              <h4>Latency Numbers</h4>
              <table>
                <thead>
                  <tr>
                    <th>Operation</th>
                    <th>Latency</th>
                  </tr>
                </thead>
                <tbody>
                  {systemDesign.interview_process.common_numbers.latency_numbers.map((item) => (
                    <tr>
                      <td>{item.operation}</td>
                      <td>{item.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div class="availability-table">
              <h4>Availability Numbers</h4>
              <table>
                <thead>
                  <tr>
                    <th>Availability</th>
                    <th>Downtime per Year</th>
                  </tr>
                </thead>
                <tbody>
                  {systemDesign.interview_process.common_numbers.availability_numbers.map((item) => (
                    <tr>
                      <td>{item.availability}</td>
                      <td>{item.downtime_per_year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .system-design-container {
          padding: 20px;
        }

        .design-section {
          margin-bottom: 40px;
        }

        .design-section h3 {
          color: #2c3e50;
          margin-bottom: 20px;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
        }

        .patterns-grid,
        .components-grid,
        .practices-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 20px;
        }

        .pattern-card,
        .component-card,
        .practice-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h4 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
        }

        h5 {
          color: #34495e;
          margin-top: 15px;
          margin-bottom: 10px;
        }

        p {
          color: #555;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
        }

        li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #3498db;
        }

        .advantages li:before {
          color: #27ae60;
        }

        .challenges li:before {
          color: #e74c3c;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .pros-cons {
            grid-template-columns: 1fr;
          }
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 30px;
        }

        .process-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .questions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .numbers-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 15px;
        }

        th, td {
          padding: 10px;
          border: 1px solid #ddd;
          text-align: left;
        }

        th {
          background: #f5f6fa;
        }

        .question-card {
          background: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      `}</style>
    </>
  );
}

function DOMPropertiesMethodsTable({ topic }: { topic: any }) {
  return (
    <div class="dom-section">
      {Object.entries(topic.sections).map(([key, section]: [string, any]) => (
        <div class="section-container">
          <h4>{section.title}</h4>
          <p>{section.description}</p>
          
          <table>
            <thead>
              <tr>
                <th style="width: 200px">Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {section[key === 'node_properties' ? 'properties' : 'methods'].map((item: any) => (
                <tr>
                  <td class="method-name">{item.name}</td>
                  <td class="tal">{item.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div class="example-section">
        <h4>Example Usage</h4>
        <div class="code-example">
          <pre><code>{topic.example}</code></pre>
        </div>
      </div>

      <style>{`
        .dom-section {
          margin-bottom: 30px;
        }

        .section-container {
          margin-bottom: 25px;
        }

        .method-name {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          color: #0366d6;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin: 15px 0;
          background: white;
        }

        th, td {
          padding: 12px;
          border: 1px solid #e1e4e8;
        }

        th {
          background: #f6f8fa;
          text-align: left;
        }

        .tal {
          text-align: left;
        }

        .example-section {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
}

function JavaScriptReactFundamentals() {
  return (
    <>
      <Title text={jsReactFundamentals.introduction.title} />
      
      {/* Introduction */}
      <section class="introduction-section">
        <p class="intro-text">{jsReactFundamentals.introduction.description}</p>
        <p class="purpose-text">{jsReactFundamentals.introduction.purpose}</p>
      </section>

      {/* JavaScript Fundamentals */}
      <section class="fundamentals-section">
        <h3>JavaScript Fundamentals</h3>
        <div class="resource-link">
          <a href="https://www.interviewbit.com/javascript-cheat-sheet/" 
             target="_blank" 
             rel="noopener noreferrer">
            📚 Comprehensive JavaScript Cheat Sheet by InterviewBit
          </a>
        </div>
        <div class="fundamentals-grid">
          {jsReactFundamentals.javascript.map((topic) => {
            if (topic.name === "DOM Properties & Methods") {
              return <DOMPropertiesMethodsTable topic={topic} />;
            }
            return (
              <div class="topic-card">
                <h4>{topic.name}</h4>
                <p>{topic.description}</p>
                
                {topic.example && (
                  <div class="code-example">
                    <h5>Example:</h5>
                    <pre><code>{topic.example}</code></pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* React Fundamentals */}
      <section class="fundamentals-section">
        <h3>React Fundamentals</h3>
        <div class="resource-link">
          <a href="https://github.com/sudheerj/reactjs-interview-questions" 
             target="_blank" 
             rel="noopener noreferrer">
            📚 Top 500 ReactJS Interview Questions & Answers
          </a>
        </div>
        <div class="fundamentals-grid">
          {jsReactFundamentals.react.map((topic) => (
            <div class="topic-card">
              <h4>{topic.name}</h4>
              <p>{topic.description}</p>
              
              {topic.example && (
                <div class="code-example">
                  <h5>Example:</h5>
                  <pre><code>{topic.example}</code></pre>
                </div>
              )}
              
              {topic.key_points && (
                <div class="key-points">
                  <h5>Key Points:</h5>
                  <ul>
                    {topic.key_points.map((point) => (
                      <li>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .fundamentals-section {
          margin-bottom: 40px;
        }

        .fundamentals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .topic-card {
          background: #fff;
          border: 1px solid #e1e4e8;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        h3 {
          color: #2c3e50;
          border-bottom: 2px solid #3498db;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }

        h4 {
          color: #2c3e50;
          margin-top: 0;
          margin-bottom: 15px;
          font-size: 1.2em;
        }

        h5 {
          color: #34495e;
          margin-top: 15px;
          margin-bottom: 10px;
          font-size: 1em;
        }

        p {
          color: #555;
          line-height: 1.5;
          margin-bottom: 15px;
        }

        .code-example {
          background: #f6f8fa;
          border-radius: 6px;
          padding: 15px;
          margin: 10px 0;
          overflow-x: auto;
        }

        pre {
          margin: 0;
          white-space: pre-wrap;
        }

        code {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 0.9em;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
          margin: 0;
        }

        li {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          line-height: 1.4;
        }

        li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #3498db;
        }

        .key-points li:before {
          color: #2ecc71;
        }

        .best-practices li:before {
          color: #e74c3c;
        }

        @media (max-width: 768px) {
          .fundamentals-grid {
            grid-template-columns: 1fr;
          }
        }

        .introduction-section {
          margin-bottom: 30px;
          padding: 20px;
          background: #f8f9fa;
          border-radius: 8px;
          border-left: 4px solid #3498db;
        }

        .intro-text, .purpose-text {
          margin-bottom: 15px;
          line-height: 1.6;
          color: #2c3e50;
        }

        .intro-text {
          font-size: 1.1em;
        }

        .purpose-text {
          font-style: italic;
          color: #34495e;
        }

        .key-methods {
          margin-top: 15px;
        }

        .method-category {
          margin-bottom: 15px;
        }

        .method-category h6 {
          color: #2c3e50;
          margin-bottom: 8px;
          font-size: 0.9em;
          font-weight: 600;
        }

        .method-category ul {
          margin-left: 15px;
        }

        .best-practices {
          margin-top: 15px;
          padding: 15px;
          background: #fff5f5;
          border-radius: 6px;
        }

        .best-practices li {
          color: #e74c3c;
        }

        .resource-link {
          margin: 1rem 0;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 4px;
          text-align: center;
        }
        
        .resource-link a {
          color: #0366d6;
          text-decoration: none;
        }
        
        .resource-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
}

function DatabasesTable() {
  return (
    <>
      <Title text={databases.title} />

      <div class="top-concepts">
        <h3>Top 10 Database Interview Concepts</h3>
        <div class="concepts-grid">
          {databases.top_10_concepts.map((concept, index) => (
            <div class="concept-card">
              <h4>{`${index + 1}. ${concept.name}`}</h4>
              <div class="explanation">
                {concept.explanation.split('\n').map((line) => (
                  <div class="explanation-line">{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="normalization-section">
        <h3>Database Normalization Deep Dive</h3>
        <details class="section-details">
          <summary>Click to expand Normalization concepts</summary>
          <div class="normalization-grid">
            <div class="concept-card">
              <h4>{databases.normalization_deep_dive.intro.title}</h4>
              <p>{databases.normalization_deep_dive.intro.description}</p>
              <ul>
                {databases.normalization_deep_dive.intro.goals.map(goal => (
                  <li>{goal}</li>
                ))}
              </ul>
            </div>

            <div class="usage-guidelines">
              <div class="concept-card">
                <h4>{databases.normalization_deep_dive.usage_guidelines.when_to_use.title}</h4>
                <ul>
                  {databases.normalization_deep_dive.usage_guidelines.when_to_use.points.map(point => (
                    <li>{point}</li>
                  ))}
                </ul>
              </div>
              <div class="concept-card">
                <h4>{databases.normalization_deep_dive.usage_guidelines.when_to_denormalize.title}</h4>
                <ul>
                  {databases.normalization_deep_dive.usage_guidelines.when_to_denormalize.points.map(point => (
                    <li>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div class="normal-forms">
              {databases.normalization_deep_dive.normal_forms.map(form => (
                <div class="concept-card">
                  <h4>{form.title}</h4>
                  <div class="requirements">
                    <h5>Requirements:</h5>
                    <ul>
                      {form.requirements.map(req => (
                        <li>{req}</li>
                      ))}
                    </ul>
                  </div>
                  <div class="example">
                    <h5>Example:</h5>
                    <pre>
                      <code>
Before:
{form.example.before}

After:
{form.example.after}
                      </code>
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <div class="evaluation">
              <div class="concept-card">
                <h4>{databases.normalization_deep_dive.evaluation.pros.title}</h4>
                <ul>
                  {databases.normalization_deep_dive.evaluation.pros.points.map(point => (
                    <li>{point}</li>
                  ))}
                </ul>
              </div>
              <div class="concept-card">
                <h4>{databases.normalization_deep_dive.evaluation.cons.title}</h4>
                <ul>
                  {databases.normalization_deep_dive.evaluation.cons.points.map(point => (
                    <li>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </details>
      </div>

      <div class="interview-questions">
        <h3>Common Database Interview Questions</h3>
        {databases.interview_questions.map((qa, index) => (
          <details class="question-detail">
            <summary class="question-summary">
              <span class="question-number">{index + 1}.</span>
              <span class="question-text">{qa.question}</span>
            </summary>
            <div class="answer">{qa.answer}</div>
          </details>
        ))}
      </div>

      <div class="sqlalchemy-questions">
        <h3>SQLAlchemy Interview Questions</h3>
        <details class="section-details">
          <summary>Click to show SQLAlchemy specific questions</summary>
          <div class="questions-container">
            {databases.sqlalchemy_questions.map((qa, index) => (
              <details class="question-detail">
                <summary class="question-summary">
                  <span class="question-number">{index + 1}.</span>
                  <span class="question-text">{qa.question}</span>
                </summary>
                <div class="answer">
                  {qa.answer.split('\n').map((line) => (
                    <div class="answer-line">{line}</div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </details>
      </div>

      <style>{`
        details {
          margin: 10px 0;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          overflow: hidden;
        }

        summary {
          padding: 12px 16px;
          background: #f6f8fa;
          cursor: pointer;
          user-select: none;
        }

        summary:hover {
          background: #f0f3f6;
        }

        .section-details {
          border: none;
        }

        .section-details summary {
          font-size: 1.1em;
          color: #0366d6;
          background: none;
          padding-left: 0;
        }

        .question-summary {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .question-number {
          color: #0366d6;
          font-weight: 600;
          min-width: 25px;
        }

        .question-text {
          flex: 1;
        }

        .answer {
          padding: 16px;
          background: white;
          line-height: 1.6;
        }

        .normalization-section {
          margin: 30px 0;
        }

        .normalization-grid {
          display: grid;
          gap: 20px;
        }

        .concept-card {
          background: white;
          border: 1px solid #e1e4e8;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .concept-card h4 {
          color: #0366d6;
          margin: 0 0 15px 0;
          font-size: 1.2em;
        }

        .concept-card h5 {
          color: #24292e;
          margin: 15px 0 10px 0;
        }

        .concept-card ul {
          list-style-type: none;
          padding-left: 0;
          margin: 10px 0;
        }

        .concept-card li {
          padding: 5px 0 5px 20px;
          position: relative;
        }

        .concept-card li:before {
          content: "•";
          position: absolute;
          left: 0;
          color: #0366d6;
        }

        pre {
          background: #f6f8fa;
          padding: 15px;
          border-radius: 6px;
          overflow-x: auto;
          margin: 10px 0;
        }

        code {
          font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
          font-size: 0.9em;
        }

        .normal-forms {
          display: grid;
          gap: 20px;
        }

        .pros-cons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .when-to-use {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        @media (max-width: 768px) {
          .pros-cons, .when-to-use {
            grid-template-columns: 1fr;
          }
        }

        .interview-questions {
          margin: 20px 0;
        }

        .question-detail {
          margin: 15px 0;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          overflow: hidden;
        }

        .question-detail summary {
          padding: 12px;
          background: #f6f8fa;
          cursor: pointer;
          font-weight: 500;
        }

        .question-detail summary:hover {
          background: #f0f3f6;
        }

        .answer {
          padding: 15px;
          line-height: 1.6;
          background: white;
        }

        .sqlalchemy-questions {
          margin: 30px 0;
        }

        .questions-container {
          margin-top: 15px;
        }

        .answer-line {
          margin: 5px 0;
        }
      `}</style>
    </>
  );
}
/*
function AgentFrameworksTable() {
  return (
    <>
      <Title text="Learn more about agents!" />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Pros</th>
            <th>Cons</th>
          </tr>
        </thead>
        <tbody>
          {agentFrameworks.popular_frameworks.map((framework) => (
            <tr>
              <td>{framework.name}</td>
              <td>{framework.description}</td>
              <td>
                <ul>
                  {framework.pros.map((pro) => (
                    <li>{pro}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {framework.cons.map((con) => (
                    <li>{con}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <br />
      
      <Title text="Use Cases" />
      <div class="use-cases-grid">
        {agentFrameworks.use_cases.map((category) => (
          <div class="use-case-card">
            <h3>{category.category}</h3>
            <ul>
              {category.examples.map((example) => (
                <li>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <br />

      <Title text="Major Problems" />
      <div class="problems-grid">
        {agentFrameworks.major_problems.map((category) => (
          <div class="problem-card">
            <h3>{category.category}</h3>
            <ul>
              {category.issues.map((issue) => (
                <li>{issue}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <br />

      <Title text="Production Deployment" />
      <div class="deployment-grid">
        <div class="deployment-card">
          <h3>Best Practices</h3>
          <ul>
            {agentFrameworks.production_deployment.best_practices.map((practice) => (
              <li>{practice}</li>
            ))}
          </ul>
        </div>
        <div class="deployment-card">
          <h3>Infrastructure Requirements</h3>
          <ul>
            {agentFrameworks.production_deployment.infrastructure_requirements.map((req) => (
              <li>{req}</li>
            ))}
          </ul>
        </div>
        <div class="deployment-card">
          <h3>Deployment Steps</h3>
          <ul>
            {agentFrameworks.production_deployment.deployment_steps.map((step) => (
              <li>{step}</li>
            ))}
          </ul>
        </div>
        <div class="deployment-card">
          <h3>Scaling Considerations</h3>
          <ul>
            {agentFrameworks.production_deployment.scaling_considerations.map((consideration) => (
              <li>{consideration}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function HuggingFaceAgentsCourse() {
  return (
    <h2>
      Open Notes folder -&gt; hugging_face_agent_course_notes.md 
    </h2>
  );
}
  */

function SecurityTable() {
  return (
    <>
      <Title text="OWASP Top 10" />
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Broken Access Control</td>
            <td>Restrictions on authenticated users are not properly enforced. Attackers can exploit to access unauthorized functionality.</td>
          </tr>
          <tr>
            <td>Cryptographic Failures</td>
            <td>Failures related to cryptography that often lead to exposure of sensitive data. Previously known as Sensitive Data Exposure.</td>
          </tr>
          <tr>
            <td>Injection</td>
            <td>User-supplied data is not validated, filtered, or sanitized by the application. Includes SQL, NoSQL, OS, and LDAP injection.</td>
          </tr>
          <tr>
            <td>Insecure Design</td>
            <td>Risks related to design and architectural flaws, calling for more use of threat modeling, secure design patterns, and reference architectures.</td>
          </tr>
          <tr>
            <td>Security Misconfiguration</td>
            <td>Security settings in applications, frameworks, application server, web server, database server, and platform are not secure.</td>
          </tr>
          <tr>
            <td>Vulnerable Components</td>
            <td>Using components (libraries, frameworks) with known vulnerabilities can undermine application defenses and enable attacks.</td>
          </tr>
          <tr>
            <td>Auth. & ID Failures</td>
            <td>Authentication and session management functions are often implemented incorrectly, allowing attackers to compromise passwords, keys, or tokens.</td>
          </tr>
          <tr>
            <td>Software & Data Integrity</td>
            <td>Software updates, critical data, and CI/CD pipelines without integrity verification can lead to malicious software installation.</td>
          </tr>
          <tr>
            <td>Security Logging Failures</td>
            <td>Insufficient logging and monitoring, coupled with missing incident response, allows attackers to further attack systems.</td>
          </tr>
          <tr>
            <td>Server-Side Request Forgery</td>
            <td>Occurs when a web application fetches a remote resource without validating the user-supplied URL, allowing attackers to forge requests.</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <div class="tac">
        <a href="https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/REST_Security_Cheat_Sheet.md#rest-security-cheat-sheet" target="_blank">
          OWASP REST Security Cheat Sheet
        </a>
      </div>
      <br/>
      <div class="tac">
        <a href="https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.md" target="_blank">
          OWASP SQL Injection Prevention Cheat Sheet
        </a>
      </div>
      <br/>

      <Title text="Security Concepts" />
      <div class="qa-list">
        {securityNotes.security_q_a.map((qa, index) => (
          <details>
            <summary>{`${index + 1}. ${qa.question}`}</summary>
            <div class="answer">
              {qa.answer.split('\n').map((line: string) => (
                <div>{line}</div>
              ))}
            </div>
          </details>
        ))}
      </div>
      <br/>
      <style>
        {`
          .answer {
            padding: 12px;
            line-height: 1.8;
            background-color: #f8f8f8;
            border-radius: 4px;
            margin: 8px 0;
          }
          details {
            margin: 8px 0;
          }
          summary {
            cursor: pointer;
            padding: 8px;
            background-color: #eee;
            border-radius: 4px;
          }
          summary:hover {
            background-color: #ddd;
          }
        `}
      </style>
    </>
  );
}

function GenAITable() {
  return (
    <>
      <Title text={genAI.title} />
      <table>
        {/* ... existing table content ... */}
      </table>

      <br/>
      <div class="interview-questions">
        <h3>Top Interview Questions</h3>
        {genAI.interview_questions.map((qa, index) => (
          <details class="question-detail">
            <summary>{`${index + 1}. ${qa.question}`}</summary>
            <div class="answer">{qa.answer}</div>
          </details>
        ))}
      </div>

      <br/>
      <div class="resource-links">
        {/* ... existing resources ... */}
      </div>

      <style>{`
        // ... existing styles ...

        .interview-questions {
          margin: 20px 0;
        }

        .question-detail {
          margin: 15px 0;
          border: 1px solid #e1e4e8;
          border-radius: 6px;
          overflow: hidden;
        }

        .question-detail summary {
          padding: 12px;
          background: #f6f8fa;
          cursor: pointer;
          font-weight: 500;
        }

        .question-detail summary:hover {
          background: #f0f3f6;
        }

        .answer {
          padding: 15px;
          line-height: 1.6;
          background: white;
        }
      `}</style>
    </>
  );
}



