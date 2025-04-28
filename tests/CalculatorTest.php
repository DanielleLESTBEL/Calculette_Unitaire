<?php

use PHPUnit\Framework\TestCase;
require_once __DIR__ . '/../src/Calculator_PHP.php';

class CalculatorTest extends TestCase {
    public function testAddition() {
        $math = new Math();
        $this->assertEquals(5, $math->addition(2, 3));
    }
}