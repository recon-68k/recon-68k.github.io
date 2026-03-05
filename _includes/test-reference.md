✅ = Supported &nbsp; · &nbsp; Blank = Not applicable for this model

<div class="test-reference" markdown="1">

## Primary Tests

Core diagnostic tests for ROM, RAM, and VRAM.

| Test | Description | II | IIcx | SE/30 | IIsi | LC III |
|------|-------------|----|------|-------|------|--------|
| ROM Checksum Test | Runs the ROM's built-in checksum test. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Memory Size | Probes memory configuration and reports the total RAM detected and slot configuration. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Address Line Test | Runs the ROM's Address Line Test. Reports any failed address lines (A0-A31). | ✅ | ✅ | ✅ | ✅ | ✅ |
| Data Bus | Runs the ROM's Data Bus Test for the data bus lines to all memory slots and banks. Reports any failed data bus lines (D0-D31). | ✅ | ✅ | ✅ | ✅ | ✅ |
| Mod3 RAM Test | Runs the ROM's Mod3 RAM Test for all RAM reported by the Memory Size test. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reverse Mod3 RAM Test | Runs the ROM's Reverse Mod3 RAM Test for all RAM reported by the Memory Size test. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Extra RAM Test | Runs the ROM's Extra RAM Test for all RAM reported by the Memory Size test. | ✅ | ✅ | ✅ | ✅ | ✅ |
| VRAM Test | Runs the ROM's Mod3 RAM test on the VRAM for on-board video output. | | | ✅ | | ✅ |

## Secondary Tests

Tests for additional logic board components — SCC, VIA, SCSI, FPU, and others.

| Test | Description | II | IIcx | SE/30 | IIsi | LC III |
|------|-------------|----|------|-------|------|--------|
| SCC Registers | Runs the ROM's Serial Communications Controller (SCC) registers test. | | | | ✅ | ✅ |
| SCC Loopback | Runs the ROM's Serial Communications Controller (SCC) loopback test. | | | | ✅ | ✅ |
| SCC Timer | Runs the ROM's Serial Communications Controller (SCC) timer test. | | | | ✅ | ✅ |
| VIA | Runs the ROM's Versatile Interface Adapter (VIA) test. | | | | ✅ | ✅ |
| VIA Timers | Runs the Macintosh II family Versatile Interface Adapter (VIA) timer tests. | ✅ | ✅ | ✅ | | |
| Real-Time Clock Chip Test | Tests the Real-Time Clock (RTC) chip time registers and one-second interrupt functionality. | ✅ | ✅ | ✅ | | |
| PRAM Test | Tests the PRAM in the Real-Time Clock chip. | ✅ | ✅ | ✅ | | |
| PRAM | Runs the ROM's PRAM test. | | | | ✅ | ✅ |
| SCSI | Runs the ROM's SCSI test. | | | | ✅ | ✅ |
| Apple Sound Chip | Runs the ROM's Apple Sound Chip (ASC) test. | | | | ✅ | ✅ |
| RBV Controller | Runs the ROM's RAM-based video controller (RBV) test. | | | | ✅ | ✅ |
| SWIM Chip | Runs the ROM's Super Woz Integrated Machine (SWIM) test. | | | | ✅ | ✅ |
| Floppy Disk Controller Chip | Tests the floppy disk controller (SWIM or IWM) chip. Does not require a floppy drive to be connected. | ✅ | ✅ | ✅ | | |
| FPU | Runs the ROM's FPU test. | | | | ✅ | |
| FPU | Tests the on-board Motorola 68881 or 68882 floating point unit. | ✅ | ✅ | ✅ | | |
| Egret Chip | Runs the ROM's Egret chip test. | | | | ✅ | ✅ |
| ADB Device Query | Tests VIA 1 to Apple Desktop Bus Transceiver communication by querying and reporting connected devices. | ✅ | ✅ | ✅ | | |
| Sound Interrupts | Runs the ROM's sound interrupts test. | | | | ✅ | ✅ |
| Dynamic Bus Sizing Test | Tests the dynamic bus sizing feature of 68020/68030 processors. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Check Burn-in Jumpers | Checks the status of the logic board's burn-in jumper lines, which can prevent a machine from chiming or booting. | ✅ | ✅ | ✅ | | |

## Video Tests

Tests for machines with on-board video output.

| Test | Description | II | IIcx | SE/30 | IIsi | LC III |
|------|-------------|----|------|-------|------|--------|
| Fill White | Fills VRAM with white pixels. | | | ✅ | | |
| Fill Black | Fills VRAM with black pixels. | | | ✅ | | |
| Video Test Patterns | Writes a series of 1-bit test patterns to RAM-based video memory. | | | ✅ | | |
| Video Test Pattern (1-bit) | Writes a 1-bit test pattern to video memory. This test fails if no monitor is connected. | | | | ✅ | ✅ |
| Video Test Pattern (4-bit) | Writes a 4-bit test pattern to video memory. This test fails if no monitor is connected. | | | | ✅ | ✅ |

## Extra Tests

Additional hardware information.

| Test | Description | II | IIcx | SE/30 | IIsi | LC III |
|------|-------------|----|------|-------|------|--------|
| Query Logic Board | Reports CPU, logic board features, and state. | ✅ | ✅ | ✅ | ✅ | |
| Scan NuBus Slots | Scans NuBus slots and reports installed cards. | ✅ | ✅ | ✅ | ✅ | |

## Utilities

Utilities for manual exploration and troubleshooting.

| Test | Description | II | IIcx | SE/30 | IIsi | LC III |
|------|-------------|----|------|-------|------|--------|
| Get Status | Gets the status of the last operation. | ✅ | ✅ | ✅ | ✅ | ✅ |
| ID | Gets the ID banner from machine containing the model identifier and current status. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Dump Memory | Retrieves the contents of memory between Start Address and End Address and displays it in the history. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Save Memory to File | Saves the contents of memory between Start Address and End Address to a file. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Fill With Repeated Value | Fills memory between Start Address and End Address with a repeating pattern using the Data Value parameter. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Fill With Binary File | Fills memory beginning with Start Address with the contents of a file. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Run Code Snippet | Loads a 680x0 machine code blob from a binary file to the Start Address and executes it. | ✅ | ✅ | ✅ | ✅ | ✅ |

## Manual Tests

Parameterized memory tests — run on a custom address range instead of full memory.

| Test | Description | II | IIcx | SE/30 | IIsi | LC III |
|------|-------------|----|------|-------|------|--------|
| Data Bus - Range | Run the ROM's Data Bus Test for every 4-byte aligned address between Start Adddress and End Address. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Mod3 RAM Test - Range | Run the ROM's Mod3 RAM Test on the range of memory between Start Adddress and End Address. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Reverse Mod3 RAM Test - Range | Run the ROM's Reverse Mod3 RAM Test on the range of memory between Start Adddress and End Address. | ✅ | ✅ | ✅ | ✅ | ✅ |
| Extra RAM Test - Range | Run the Extra ROM's RAM Test on the range of memory between Start Adddress and End Address. | ✅ | ✅ | ✅ | ✅ | ✅ |

</div>
