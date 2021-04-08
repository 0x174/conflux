'''
--------------------------------------------------------------------------------
Description: An ActionGraph describes a frozen graph state that are composed of
biological automation primitive nodes. We traverse the Graph to generate
our output protocol.


Written by W.R. Jackson <wrjackso@bu.edu>, DAMP Lab 2021
--------------------------------------------------------------------------------
'''
from enum import Enum
from dataclasses import dataclass, field
from typing import List


# ---------------------- Capabilities Classes Start Here -----------------------
# We define things such as robotic control, or lab equipment as Resources. Each
# Resource has certain capabilities described here. For example, a Hamilton has
# the capability for Liquid Handling, Motion, and Thermal Control while an OT2
# does not have access to Motion.
#
# This obviously gets muddy as many of our targets have modular capabilities,
# such as the addition of extending subsytems. For the purposes of our initial
# pass we're going to ignore that capability.
class Capabilities(Enum):
    LIQUID_HANDLING = "LiquidHandling"
    THERMAL_CONTROL = "ThermalControl"
    MOTION = "Motion"


@dataclass
class BaseCapabilities:
    name: str = None
    capabilities: Enum = None


@dataclass
class HamiltonCapabilities(BaseCapabilities):
    name: str = "Hamilton"
    capabilities: List = field(default_factory=list)

    def __post_init__(self):
        self.capabilities = [
            Capabilities.LIQUID_HANDLING,
            Capabilities.THERMAL_CONTROL,
            Capabilities.MOTION,
        ]


@dataclass
class OT2Capabilities(BaseCapabilities):
    pass


@dataclass
class BioautomationPrimitiveBase:
    pass


class ActionGraph:

    def __init__(self):
        """

        """
        pass


if __name__ == '__main__':
    thing = HamiltonCapabilities()
    print(thing.capabilities)
