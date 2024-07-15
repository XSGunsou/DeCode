// scripts.js

function solve24() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert('Please enter all four numbers.');
        return;
    }

    const nums = [num1, num2, num3, num4];
    const solutions = findSolutions(nums);
    displaySolutions(solutions);
}

function findSolutions(nums) {
    const results = [];
    const ops = ['+', '-', '*', '/'];

    function permute(arr) {
        const permutations = [];
        if (arr.length === 1) return [arr];
        for (let i = 0; i < arr.length; i++) {
            const currentNum = arr[i];
            const remainingNums = arr.slice(0, i).concat(arr.slice(i + 1));
            const remainingPermutations = permute(remainingNums);
            for (const perm of remainingPermutations) {
                permutations.push([currentNum].concat(perm));
            }
        }
        return permutations;
    }

    function compute(a, b, op) {
        switch (op) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return b !== 0 ? a / b : null;
        }
    }

    function generateExpressions(nums) {
        const expressions = [];
        for (let i = 0; i < ops.length; i++) {
            for (let j = 0; j < ops.length; j++) {
                for (let k = 0; k < ops.length; k++) {
                    expressions.push(`(((${nums[0]} ${ops[i]} ${nums[1]}) ${ops[j]} ${nums[2]}) ${ops[k]} ${nums[3]})`);
                    expressions.push(`((${nums[0]} ${ops[i]} (${nums[1]} ${ops[j]} ${nums[2]})) ${ops[k]} ${nums[3]})`);
                    expressions.push(`(${nums[0]} ${ops[i]} ((${nums[1]} ${ops[j]} ${nums[2]}) ${ops[k]} ${nums[3]}))`);
                    expressions.push(`(${nums[0]} ${ops[i]} (${nums[1]} ${ops[j]} (${nums[2]} ${ops[k]} ${nums[3]})))`);
                    expressions.push(`((${nums[0]} ${ops[i]} ${nums[1]}) ${ops[j]} (${nums[2]} ${ops[k]} ${nums[3]}))`);
                }
            }
        }
        return expressions;
    }

    const numPermutations = permute(nums);
    for (const perm of numPermutations) {
        const expressions = generateExpressions(perm);
        for (const exp of expressions) {
            try {
                if (Math.abs(eval(exp) - 24) < 1e-9) {
                    results.push(exp);
                }
            } catch (e) {
                continue;
            }
        }
    }
    return results;
}

function displaySolutions(solutions) {
    const solutionList = document.getElementById('solutionList');
    const solutionsHeader = document.getElementById('solutionsHeader');
    solutionList.innerHTML = '';
    if (solutions.length === 0) {
        solutionsHeader.innerHTML = "There's no way bro 💀";
    } else {
        solutionsHeader.innerHTML = `${solutions.length} Solutions`;
        solutions.forEach((solution, index) => {
            const solutionItem = document.createElement('div');
            solutionItem.className = 'solution';
            solutionItem.textContent = solution;
            solutionList.appendChild(solutionItem);
        });
    }
}
